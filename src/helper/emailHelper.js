import { sendMailPromise } from "../common/mail";

export const sendReservationEmail = async (data, email) => {
  console.log(data, email);
  try {
    let mailOptions = {
      from: "tempEmail@gmail.com", //Please add a working email address to test this
      to: email, // list of receivers
      subject: "MangoHolidays - Reservation created", // Subject line
      html: `<!DOCTYPE html><html><head></head> 
       <body> 
        Reservation Id: ${data.paymentDetails.reservationId}<br>
        Start Date: ${data.reservationDetails.startDate}<br>
        End Date: ${data.reservationDetails.endDate}
       </body>
      </html>`,
    };
    await sendMailPromise(mailOptions);
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
