import express from "express";
import authController from '../controllers/authController'

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------

// Route implementations
router.post("/register", authController.register);

router.post("/login", authController.login);

module.exports = router;