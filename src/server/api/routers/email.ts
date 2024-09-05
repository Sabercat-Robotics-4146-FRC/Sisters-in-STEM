import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createTransport } from "nodemailer";
import { env } from "~/env";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const options: SMTPTransport.Options = {
  host: "mail.google.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "contact@sistersinstem.net",
    clientId: env.GMAIL_CLIENT_ID,
    clientSecret: env.GMAIL_CLIENT_SECRET,
    refreshToken: env.GMAIL_REFRESH_TOKEN,
    accessToken: env.GMAIL_ACCESS_TOKEN,
  },
};
let transporter = createTransport(options);

export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(z.object({
    email: z.string().email(),
    subject: z.string().min(1).max(128),
    message: z.string().min(1),
  })).query(async function({ input }) {
    const { email, subject, message } = input;

    let isVerified = false;
    try {
      isVerified = await transporter.verify();
    } catch(err) {
      console.warn(err);
      transporter = createTransport(options);
      return "Something went wrong. Please try again later.";
    };
    if (!isVerified) {
      transporter = createTransport(options);
      return "Something went wrong. Please try again later.";
    };

    try {
      const res = await transporter.sendMail({
        from: "contact@sistersinstem.net",
        to: ["contact@sistersinstem.net"],
        replyTo: email,
        subject: `[Contact Form]: "${subject}"`,
        text: `[Message Content]: "${message}"`,
      });
      if (res.accepted.length > 0 && res.rejected.length === 0) {
        return "Your message has been sent. We will get back to you soon. Thank you!";
      } else {
        throw new Error("Email was not accepted.");
      };
    } catch(err) {
      console.warn(err);
      return "We could not send your contact form to our team. Please try again later.";
    };
  }),
});
