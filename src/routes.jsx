import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import "./App.css";

import App from "./App";
import SignUp from "./SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<SignUp />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
