import { Route, Routes } from "react-router-dom";
import Ts from "../Languages/Ts";
import Js from "../Languages/Js";
import React from "../Languages/React";
import Html from "../Languages/Html";
import Css from "../Languages/Css";
import NotFound from "../NotFound";
import Login from "../Login/Login";
import DndComponent from "../LangsComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<DndComponent />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="typescript" element={<Ts />}></Route>
      <Route path="javascript" element={<Js />}></Route>
      <Route path="html" element={<Html />}></Route>
      <Route path="react" element={<React />}></Route>
      <Route path="css" element={<Css />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
