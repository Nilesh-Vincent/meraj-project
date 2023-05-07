import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logowhite.png";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-10 w-full"
      style={{ height: "25vh" }}
    >
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="w-full flex justify-center mb-4">
          <ul className="flex flex-wrap justify-center space-x-4 text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center mb-4">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-gray-400 p-2">
            &copy; 2023 Finance App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
