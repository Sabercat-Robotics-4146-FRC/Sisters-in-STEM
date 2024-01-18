"use server";
import { createTransport } from "nodemailer";
import { validate } from "email-validator";

const Transport = createTransport({
  host: "mail.google.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "contact@sistersinstem.net",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
});

let Verified;
Transport.verify(function (Err) {
  if (Err) {
    console.warn(Err);
    Verified = false;
  } else {
    Verified = true;
  };
});

export async function SendEmail(Body) {
  let Successful;
  if (Body && Body.Email && validate(Body.Email) && Body.Subject && Body.Subject.replace(/\s/g, "").length && Body.Message && Body.Message.replace(/\s/g, "").length) {
    await new Promise(function (Resolve) {
      const Loop = function () {
        Verified !== undefined ? Resolve(Verified) : setTimeout(Loop);
      };
      Loop();
    });
    if (!Verified) {
      return {
        Success: false,
        Message: "There was an error with authenticating our email account. Please try again, or contact our email contact@sistersinstem.net.",
      };
    };
    Transport.sendMail({
      from: "contact@sistersinstem.net",
      to: ["contact@sistersinstem.net"],
      replyTo: Body.Email,
      subject: `[Contact Form]: "${Body.Subject}"`,
      text: `[Message Content]: "${Body.Message}"`,
    }, function (Err) {
      if (Err) {
        console.warn(Err);
        Successful = false;
      } else {
        Successful = true;
      };
    });
    await new Promise(function (Resolve) {
      const Loop = function () {
        Successful !== undefined ? Resolve(Verified) : setTimeout(Loop);
      };
      Loop();
    });
    if (Successful) {
      return {
        Success: true,
        Message: "Thank you for sending an email! Your email was successfully sent, so expect a response within 3-5 business days. Thank you!",
      };
    } else {
      return {
        Success: false,
        Message: "There was an error on our server when sending your email. Please try again, or contact our email contact@sistersinstem.net if you think this was a mistake.",
      };
    };
  } else {
    return {
      Success: false,
      // To-do: make this line of code cleaner or something
      Message: !Body ? "No data was sent in the request. Please try again with valid data." : (!Body.Email || !validate(Body.Email) ? "The email that was provided was invalid. Please try again with a valid email, or contact our email contact@sistersinstem.net if you think this was a mistake." : (!Body.Subject || !Body.Subject.replace(/\s/g, "").length ? "The subject you provided was empty. Please try again with a valid subject, or contact our email contact@sistersinstem.net if you think this was a mistake." : (!Body.Message || !Body.Message.replace(/\s/g, "").length ? "The message you provided was empty. Please try again with a valid message, or contact our email contact@sistersinstem.net if you think this was a mistake." : "An unknown error occured on the server. Please try again with a valid subject, or contact our email contact@sistersinstem.net if you think this was a mistake."))),
    };
  };
};