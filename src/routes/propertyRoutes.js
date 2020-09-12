import express from "express";
import propertyController from '../controllers/propertyController'

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------

// Route implementations
router.get("/details", propertyController.propertyDetails);

router.get("/details-by-property", propertyController.propertyById);

router.get("/room", propertyController.getRoobById);

module.exports = router;