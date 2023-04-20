// Importa los módulos necesarios
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../store/ContextStore";

function PrivateRoutes() {
  const { state } = useContext(LoginContext);
  const isAuthenticated = state.authenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
