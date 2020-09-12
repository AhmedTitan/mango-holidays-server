import models from "../models";

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
    return res.send({ message: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  register,
};
