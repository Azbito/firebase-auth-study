import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./PrivateRoutes";
import { Fragment } from "react";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}> 
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
    </BrowserRouter>
  )
}