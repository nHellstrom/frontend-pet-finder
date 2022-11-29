import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Wanting from "../../Pages/Wanting/Wanting";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;