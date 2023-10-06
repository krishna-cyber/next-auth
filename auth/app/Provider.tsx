/** @format */

import { SessionProvider } from "next-auth/react";

const Providers = (props) => {
  return (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  );
};

export default Providers;
