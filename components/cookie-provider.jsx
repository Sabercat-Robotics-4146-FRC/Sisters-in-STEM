// This code provides access to cookies on the client (scripts with "use client"; at the top)
// Don't change (unless if it's necessary) please!
import { CookiesProvider } from "next-client-cookies/server";

export default function ClientCookiesProvider(props) {
  return (<CookiesProvider {...props} />);
};