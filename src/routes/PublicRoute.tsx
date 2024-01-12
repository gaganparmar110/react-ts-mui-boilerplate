import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageKeys } from "../utils/index";

const PublicRoute = () => {
  const token = getLocalStorageKeys("token");

  return token ? (
    <Navigate to="/" />
  ) : (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

export default PublicRoute;
