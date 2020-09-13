import express from "express";
import propertyController from '../controllers/reservationController'

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------

// Route implementations
router.post("/", propertyController.createReservation);

module.exports = router;