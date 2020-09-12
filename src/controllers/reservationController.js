import models from "../models";
import { sendReservationEmail } from "./../helper/emailHelper";

export const createReservation = async (req, res) => {
  try {
    console.log(req.body);
    req.body.reservationDetails.userId = req.userId || 1;
    req.body.reservationDetails.bookingStatus = "confirmed";
    const newEeservation = await models.reservation.create(
      req.body.reservationDetails
    );

    req.body.paymentDetails.reservationId = newEeservation.id;
    await models.payment.create(req.body.paymentDetails);

    const user = await models.user.findOne({
      where: { id: req.userId || 1 },
      attributes: ["email"],
    });
    sendReservationEmail(req.body, 'tempEmail@gmail.com');
    res.send({ message: "Reservation created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  createReservation,
};
