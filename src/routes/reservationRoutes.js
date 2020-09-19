import express from "express";
import propertyController from '../controllers/reservationController'
import { checkToken } from "../middleware/jwtValidation";

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------

// Route implementations
router.post("/", checkToken, propertyController.createReservation);

router.get("/availability/:roomId", propertyController.roomAvailability);

router.get("/mybookings", checkToken, propertyController.myBookings);

router.get("/cancel/:id", checkToken, propertyController.cancelBooking);

module.exports = router;