import express from "express";

const router = express.Router();

const baseUrlV1 = process.env.BASE_URL_V1;

//Test route to check server status
router.get(`/`, (req, res) => {
  res.send({ server: "App online" });
});

//auth & register routes implementations
router.use(`${baseUrlV1}/auth`, require("./authRoutes"));

export default router;
