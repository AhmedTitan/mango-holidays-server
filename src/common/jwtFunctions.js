import jwt from "jsonwebtoken";

export const generateJwt = (userId) => {
  return jwt.sign({ userId }, "1234567", {
    expiresIn: "30d", // expires in 100 days
  });
};
