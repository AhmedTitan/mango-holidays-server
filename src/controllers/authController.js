import models from "../models";
import { generateJwt } from "./../common/jwtFunctions";

const register = async (req, res) => {
  try {
    const { userName, email, password, contactNumber } = req.body;
    const existUser = await models.user.findOne({
      where: {
        email,
      },
      attributes: ["id"],
    });

    //If email address already registered
    if (existUser?.id) {
      return res.status(400).send({ message: "Email address already in use" });
    }

    //If new user
    const newUser = await models.user.create({
      userName,
      email,
      password,
      contactNumber,
    });
    const token = generateJwt(newUser.id);
    return res.send({ message: "User Created", data: token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await models.user.findOne({
      where: {
        email,
      },
      attributes: ["id", "password"],
    });
    if (user) {
      if (password === user.password) {
        const token = generateJwt(user.id);
        return res.send({ message: "Login successful", data: token });
      }
      return res.status(400).send({ message: "Invalid Password" });
    }
    return res.status(400).send({ message: "Invalid email address" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  register,
  login,
};
