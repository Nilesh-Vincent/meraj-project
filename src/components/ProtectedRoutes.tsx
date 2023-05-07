import { Navigate, Outlet } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

const useAuth = (val: any) => {
  const user = { loggedIn: val };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  let val = false;
  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("isLoggedIn") || "false");

    if (val === true) {
      useAuth(val);
    }
  }, []);
  const isAuth = true;
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
