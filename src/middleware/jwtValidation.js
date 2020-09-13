import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  let token = req.headers["authorization"]; // Express headers are auto converted to lowercase

  if (token) {
    jwt.verify(token, "1234567", (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Token is not valid" });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.status(401).send({ message: "Auth token is not supplied" });
  }
};
