"use client";
import { CookiesProvider } from "next-client-cookies";

export default function ClientCookiesProvider(props) {
  return (<CookiesProvider {...props} />);
};