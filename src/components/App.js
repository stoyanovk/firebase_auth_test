import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../providers/UserProvider";

function Application() {
  const { user } = React.useContext(UserContext);

  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default Application;
