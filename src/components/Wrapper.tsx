import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../store/LoginContext";

export function Wrapper(props: any) {
  const { state } = useContext(LoginContext);

  if (!state.authenticated) return <Navigate to={"/login"} />;

  return props.children;
}
