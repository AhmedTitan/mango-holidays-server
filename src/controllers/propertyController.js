import models from "../models";

export const propertyDetails = async (req, res) => {
  try {
    const properties = await models.room.findAll();

    if (properties.length) {
      return res.send({ message: "data fetched successfully", properties });
    } else {
      return res.status(400).send({ message: "Unable to find any details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export const getRoobById = async (req, res) => {
  try {
    const { roomId } = req.body;
    const room = await models.room.findOne({
      where: {
        id: roomId,
      },
    });

    if (room) {
      return res.send({ message: "data fetched successfully", room });
    } else {
      return res.status(400).send({ message: "Unable to find any details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export const propertyById = async (req, res) => {
  try {
    const { propId } = req.body;
    const rooms = await models.room.findAll({
      where: {
        roomNumber: propId,
      },
    });

    if (rooms.length) {
      return res.send({ message: "data fetched successfully", rooms });
    } else {
      return res.status(400).send({ message: "Unable to find any details" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default {
  propertyDetails,
  getRoobById,
  propertyById
};
