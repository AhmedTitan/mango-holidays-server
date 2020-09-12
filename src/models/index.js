import express from "express";
import { checkToken } from "../middlewares/jwtValidation";

const router = express.Router();

const baseUrlV1 = process.env.BASE_URL_V1;

//Test route to check server status
router.get(`/`, (req, res) => {
  res.send({ server: "App online" });
});

//auth & register routes implementations
router.use(`${baseUrlV1}/auth`, require("./authRoutes"));
//unauthenticated Common routes
router.use(`${baseUrlV1}/common`, require("./commonRoutes"));
//club routes implementations
router.use(`${baseUrlV1}/club`, checkToken, require("./clubRoutes"));
//event routes implementation
router.use(`${baseUrlV1}/events`, checkToken, require("./eventRoutes"));
//image uploading routes
router.use(`${baseUrlV1}/image`, checkToken, require("./imageUploadRoutes"));

module.exports = router;