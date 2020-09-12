import express from "express";

const router = express.Router(); // Define Express Router

//----------------------Authenticated routes-------------------

// Route implementations
router.post("/register", (req, res) => {res.send({message: 'test'})});

module.exports = router;