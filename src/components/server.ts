"use server";

import { api } from "~/trpc/server";

export async function sendEmail(props: {
  email: string;
  subject: string;
  message: string;
}) {
  return await api.email.send(props);
};