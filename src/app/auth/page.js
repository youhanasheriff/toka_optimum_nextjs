import React from "react";
import { redirect } from "next/navigation";

const Auth = () => {
  redirect("/auth/sign-in");
  return <div></div>;
};

export default Auth;
