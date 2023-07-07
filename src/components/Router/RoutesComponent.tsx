import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Home from "../Home/Home";
import NavBar from "../Home/NavBar";

const RoutesComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/langs/*" element={<AppRoutes />}></Route>
      </Routes>
    </>
  );
};

export default RoutesComponent;
