import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AuthLayout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
