import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  let auth = localStorage.getItem("logged") || false;
  console.log(`Esto es el valor de auth: ${auth}`);

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
