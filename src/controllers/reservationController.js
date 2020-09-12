import models from "../models";

export const createReservation = async (req, res) => {
  try {
    console.log(req.body)
    req.body.reservationDetails.userId = req.userId || 1;
    req.body.reservationDetails.bookingStatus = "confirmed";
    const newEeservation = await models.reservation.create(req.body.reservationDetails);

    req.body.paymentDetails.reservationId = newEeservation.id;
    await models.payment.create(req.body.paymentDetails);
    res.send({ message: "Reservation created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  createReservation,
};
