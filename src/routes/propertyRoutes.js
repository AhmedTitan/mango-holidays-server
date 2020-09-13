import express from "express";
import propertyController from '../controllers/propertyController'

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------

// Route implementations
router.get("/", propertyController.allProperties);

router.get("/details", propertyController.propertyDetails);

router.get("/:propertyId", propertyController.propertyById);

router.get("/room", propertyController.getRoobById);

module.exports = router;