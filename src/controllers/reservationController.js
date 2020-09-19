import models from "../models";
import sequelize from "sequelize";
import moment from "moment";
import { sendReservationEmail } from "./../helper/emailHelper";
import { bookingStatus, DATE_FORMAT } from "../common/constants";
import { getAllBookedDates } from "../helper/reservationHelper";
const { gt, lte, ne, in: opIn, lt } = sequelize.Op;

export const createReservation = async (req, res) => {
  try {
    const { userId } = req.decoded;
    req.body.reservationDetails.userId = userId;
    req.body.reservationDetails.bookingStatus = bookingStatus.ACTIVE;
    const newEeservation = await models.reservation.create(
      req.body.reservationDetails
    );
    req.body.paymentDetails.reservationId = newEeservation.id;
    await models.payment.create(req.body.paymentDetails);

    const user = await models.user.findOne({
      where: { id: userId },
      attributes: ["email"],
    });
    sendReservationEmail(req.body, user.email);
    res.send({ message: "Reservation created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
export const roomAvailability = async (req, res) => {
  try {
    const { roomId } = req.params;
    
    const reservationDates = await models.reservation.findAll({
      where: {
        roomId,
        endDate: {
          [gt]: moment().format(DATE_FORMAT),
        },
        bookingStatus: bookingStatus.ACTIVE,
      },
      attributes: ["id", "startDate", "endDate"],
    });
    
    res.send({
      message: "Availability fetched.",
      data: getAllBookedDates(reservationDates),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  createReservation,
  roomAvailability,
};
