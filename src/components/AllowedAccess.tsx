import React, { useState, useRef, useEffect } from "react";
import imageLeft from "../assets/left-financial.svg";
import imageRight from "../assets/right-financial.svg";
import logo from "../assets/logo.svg";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

export default function AllowedAccess() {
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
  }, []);
  return (
    <>
      <Header />
      {/* <div>
				<img src={logo} alt="logo" className="mt-16 ml-16 w-40" />
				<img
					src={imageLeft}
					alt="left-financial"
					className="absolute bottom-0 left-0 w-[30rem]"
				/>
				<img
					src={imageRight}
					alt="right-financial"
					className="absolute bottom-0 right-0 w-[30rem]"
				/>
			</div> */}
      <div
        className="flex flex-col items-center pt-10"
        style={{ height: "calc(75vh - 60px)" }}
      >
        <b>
          <p className="text-2xl  text-gray-800 font-sans ">
            Welcome Admin! Allowed Access
          </p>
        </b>
      </div>
      <Footer />
    </>
  );
}
