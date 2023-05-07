import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center pt-4 pb-4 pl-8 pr-2 bg-yellow-300"
      style={{ height: "60px" }}
    >
      <div className="w-40">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="text-right">
        <ul className="inline-flex list-none">
          <li className="mr-6">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold font-sans"
            >
              Home{" "}
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold font-sans"
            >
              About Us{" "}
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold font-sans"
            >
              Services{" "}
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold font-sans"
            >
              Contact{" "}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
