import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { logedIn } from "./service";
import imageLeft from "../../assets/left-financial.svg";
import imageRight from "../../assets/right-financial.svg";
import "./ErrorBoundary.css";
import { Calculator } from "phosphor-react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

import { RotatingLines } from "react-loader-spinner";

type ICreateUserData = {
  username: string;
  password: string;
};

export default function SignIn() {
  const navigate = useNavigate();
  const [loggingData, setloggingData] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [triggerError, setTriggerError] = useState(false);

  const schema = yup.object({
    username: yup.string().required("username field is required."),
    password: yup.string().required("Password field is required."),
  });
  const {
    register,
    handleSubmit: onSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<ICreateUserData>({ resolver: yupResolver(schema) });

  const handleSubmit = async () => {
    setloading(true);
    setShow(false);
    let postdata = loggingData;

    try {
      const { data } = await logedIn(postdata);

      setloading(false);
      if (data) {
        if (data.value == 1) {
          //navigate to error page
          // navigate("/404");
          setTriggerError(true);
        } else if (data.value == "invalid user") {
          setShow(true);

          //trigger alert
        } else {
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          navigate("/home");
        }
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onHandleSubmit = () => {
    console.log("Click");
  };
  const handleChange = (event: any) => {
    setloggingData({
      ...loggingData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <Header />
      {!triggerError && loading && (
        <div
          className="flex justify-center self-center"
          style={{ height: "calc(75vh - 60px)" }}
        >
          <div className=" justify-center self-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="68"
              visible={true}
            />{" "}
          </div>
        </div>
      )}
      {triggerError && !loading && (
        <div id="main" style={{ height: "calc(75vh - 60px)" }}>
          <div className="fof font-sans text-gray-800">
            <p className="text-8xl pb-7">Error 404</p>
            <p className=" text-2xl italic">Something went wrong</p>
          </div>
        </div>
      )}{" "}
      {!triggerError && !loading && (
        <div className="flex flex-col items-center">
          {/* <img
            src={imageLeft}
            alt="left-financial"
            className="absolute bottom-0 left-0 w-[30rem]"
          />
          <img
            src={imageRight}
            alt="right-financial"
            className="absolute bottom-0 right-0 w-[30rem]"
          /> */}
          <form
            onSubmit={onSubmit(handleSubmit)}
            className="flex h-[calc(100vh-95px)] flex-col justify-center items-center outline-none"
            style={{ height: "calc(75vh - 60px)" }}
          >
            {show === false ? (
              <p className="place-self-start font-semibold  text-gray-800 font-sans text-3xl self-center pb-5">
                LOGIN TO THE SYSTEM
              </p>
            ) : (
              <p className="place-self-start font-semibold text-base text-[#C93B32] font-sans">
                Invalid user please check your username and password again!
              </p>
            )}

            <input
              {...register("username")}
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className={
                errors.username
                  ? "block peer rounded-[5px] w-[25rem]  mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]"
                  : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"
              }
            />
            <span className="place-self-start text-[14px] text-[#C93B32]">
              {errors.username?.message}
            </span>

            <input
              {...register("password")}
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className={
                errors.password
                  ? "block peer rounded-[5px] w-[25rem] mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]"
                  : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"
              }
            />
            <span className="place-self-start text-[14px] text-[#C93B32]">
              {errors.password?.message}
            </span>
            <Link
              to=""
              className="place-self-end hover: text-gray-800 hover:underline"
            >
              <p className=" text-gray-800 font-sans ">Forgot Password?</p>
            </Link>

            <button
              type="submit"
              className={`${
                loading === false
                  ? "rounded-full bg-yellow-300 text-gray-800 w-[25rem] p-3 mt-5 hover:bg-yellow-400 mb-5 font-semibold"
                  : "rounded-full  bg-yellow-200 text-gray-800 w-[25rem] p-3 mt-5 mb-5 font-semibold"
              }`}
              onClick={onHandleSubmit}
              disabled={loading}
            >
              {loading === false ? "SIGN IN" : "SIGN IN ..."}
            </button>

            <Link to="" className="hover: text-gray-800 hover:underline">
              <p className=" text-gray-800 mb-5 font-sans">
                Don't have an account? Sign up
              </p>
            </Link>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
}
