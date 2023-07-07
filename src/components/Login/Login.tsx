import { useState } from "react";
import LoginInputs from "./LoginInputs";
import RoutesComponent from "../Router/RoutesComponent";

const Login = () => {
  const [user, setUser] = useState<string[]>([]);

  return (
    <>
      {!(user.length > 0) ? (
        <LoginInputs user={setUser} />
      ) : (
        <RoutesComponent />
      )}
    </>
  );
};

export default Login;
