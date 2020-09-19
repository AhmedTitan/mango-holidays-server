import moment from "moment";
import models from "../models";
import { bookingStatus, DATE_FORMAT } from "../common/constants";
import sequelize from "sequelize";
const { gt, lte, ne, in: opIn, lt } = sequelize.Op;

export const getDatesBetween = (startDate, endDate) => {
  const dates = [];
  let currentDate = moment(startDate);

  while (currentDate <= moment(endDate)) {
    dates.push(moment(currentDate).format(DATE_FORMAT));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dates;
};

export const getAllBookedDates = (bookingArray) => {
  let allBookingDates = [];
  bookingArray?.forEach((booking) => {
    allBookingDates = [
      ...allBookingDates,
      ...getDatesBetween(booking.startDate, booking.endDate),
    ];
  });
  return allBookingDates;
};

export const validateAvailability = async (roomId, startDate, endDate) => {
  const reservationDates = await models.reservation.findAll({
    where: {
      roomId,
      endDate: {
        [gt]: moment().format(DATE_FORMAT),
      },
      bookingStatus: bookingStatus.ACTIVE,
    },
    attributes: ["id", "startDate", "endDate"],
  });

  let dateConflicts = false;
  const previousBookingDates = getAllBookedDates(reservationDates);
  const newBookingDates = getDatesBetween(startDate, endDate);
  previousBookingDates.forEach((previousBookingDate) => {
    !dateConflicts &&
      (dateConflicts = newBookingDates.some(
        (newBookingDate) => previousBookingDate === newBookingDate
      ));
  });
  if (dateConflicts) return Promise.reject("Selected Date is already booked");
  else return Promise.resolve(dateConflicts);
};
