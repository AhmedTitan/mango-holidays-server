import moment from "moment";
import { DATE_FORMAT } from "../common/constants";

export const getDatesBetween = (startDate, endDate) => {
  const dates = [];
  let currentDate = moment(startDate);

  while (currentDate <= endDate) {
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
