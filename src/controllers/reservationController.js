import models from "../models";
import sequelize from "sequelize";
import moment from "moment";
import { sendReservationEmail } from "./../helper/emailHelper";
import { bookingStatus, DATE_FORMAT } from "../common/constants";
import { getAllBookedDates, validateAvailability } from "../helper/reservationHelper";
const { gt, lte, ne, in: opIn, lt } = sequelize.Op;

export const createReservation = async (req, res) => {
  try {
    const { userId } = req.decoded;
    req.body.reservationDetails.userId = userId;
    req.body.reservationDetails.bookingStatus = bookingStatus.ACTIVE;
    await validateAvailability(
      req.body.reservationDetails.roomId,
      req.body.reservationDetails.startDate,
      req.body.reservationDetails.endDate
    );
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

export const myBookings = async (req, res) => {
  try {
    const { userId } = req.decoded;

    const reservations = await models.reservation.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: models.room,
          attributes: ["roomName", "amenities", "numberOfGuests"],
          include: [
            {
              model: models.property,
              attributes: ["propertyName", "imageUrl", "place"],
            },
          ],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "roomId"],
      },
    });

    res.send({
      message: "Bookings fetched.",
      data: reservations,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    await models.reservation.update(
      {
        bookingStatus: bookingStatus.CANCELED,
      },
      {
        where: {
          id,
        },
      }
    );

    res.send({
      message: "Booking Canceled.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  createReservation,
  roomAvailability,
  myBookings,
  cancelBooking,
};
