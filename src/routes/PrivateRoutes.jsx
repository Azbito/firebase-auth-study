import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

export function PrivateRoutes() {
  const { isSigned } = useContext(AuthGoogleContext)

  return isSigned ? <Outlet /> : <Navigate to="/login" />
}