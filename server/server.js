const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000; // Choose your desired port

// Configure nodemailer with your email transport settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "varadnikharage201@gmail.com",
    pass: "pxzu bwhu wvie prfx",
  },
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(cors());

// API endpoint to handle booking data and send email
app.post("/send-booking-email", (req, res) => {
  const bookingData = req.body;

  console.log("Received request body:", bookingData);

  // HTML template for the email body
  const htmlBody = `
    <h1 style="font-family: Arial, sans-serif;text-align:center">Invoice</h1>
<p style="font-family: Arial, sans-serif; margin-bottom: 10px;">
    <strong>Invoice Number:</strong>
    INV-${generateInvoiceNumber()}
</p>
<p style="font-family: Arial, sans-serif; margin-bottom: 10px;"><strong>Invoice Date:</strong> ${getCurrentDate()}</p>

<p style="font-family: Arial, sans-serif; margin-bottom: 10px;">
    <strong>From :</strong>
    ${bookingData.stationId} | ${bookingData.evid}
</p>

<p style="font-family: Arial, sans-serif; margin-bottom: 10px;">
    <strong>To :</strong>
    ${bookingData.userId}
</p>


<hr style="margin-bottom: 20px;">
<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;" border="1">
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Description</th>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Hours</th>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Total</th>
    </tr>
    <tr>
        <td style="padding: 8px; text-align: left;">EV Station Booking [ St.Id :- ${
          bookingData.stationId
        }<br />
            Ev Id :- ${bookingData.evid}]</td>
        <td style="padding: 8px; text-align: left;">${
          bookingData.totalHoursEvBooking
        }</td>
        <td style="padding: 8px; text-align: left;">₹ ${
          bookingData.totalPayable
        }</td>
    </tr>
</table>


<h3 style="font-family: Arial, sans-serif;">Booking Details</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Booking Slot</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.bookingSlot
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Time for Booked</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.timeForBooked
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Total Hours for EV Booking</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.totalHoursEvBooking
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Booked For Date</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.bookedForDate
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Current Timestamp</th>
        <td style="padding: 8px; text-align: left;">${new Date(
          bookingData.currentTimestamp
        ).toLocaleString()}</td>
    </tr>

    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Booking Status</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.bookingStatus
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Remark</th>
        <td style="padding: 8px; text-align: left;">${bookingData.remark}</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Total Payable</th>
        <td style="padding: 8px; text-align: left;">₹ ${bookingData.totalPayable.toFixed(
          2
        )}</td>
    </tr>
</table>

<h3 style="font-family: Arial, sans-serif;">Payment Details</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">

    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Payment Type</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.paymentDetails.paymentType
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Payment Status</th>
        <td style="padding: 8px; text-align: left;">${
          bookingData.paymentDetails.paymentStatus
        }</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Amount</th>
        <td style="padding: 8px; text-align: left;">$${bookingData.paymentDetails.amount.toFixed(
          2
        )}</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Card Number</th>
        <td style="padding: 8px; text-align: left;">${maskCardNumber(
          bookingData.paymentDetails.cardno
        )}</td>
    </tr>
    <tr>
        <th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Created Date</th>
        <td style="padding: 8px; text-align: left;">${new Date(
          bookingData.paymentDetails.createdDate
        ).toLocaleString()}
        </td>
    </tr>
</table>

<br />
<hr />
<p style="font-family: Arial, sans-serif;">This is a computer-generated invoice and does not require a signature.</p>
<p style="font-family: Arial, sans-serif;">Thank you for using our service!</p>
<p style="font-family: Arial, sans-serif;"><b>EvGlob</b> - Your EV Booking Solution</p>
`;

  // Function to generate a random invoice number (for demonstration purposes)
  function generateInvoiceNumber() {
    return Math.floor(Math.random() * 10000) + 1;
  }

  // Function to mask card number
  function maskCardNumber(cardNumber) {
    const lastDigit = cardNumber.slice(-4);
    const maskedDigits = "X".repeat(cardNumber.length - 4);
    return maskedDigits + lastDigit;
  }

  // Function to get the current date
  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  // Email options
  const mailOptions = {
    from: "varadnikharage201@gmail.com",
    to: req.body.email,
    subject: "Booking Details",
    html: htmlBody,
  };

  // Send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
