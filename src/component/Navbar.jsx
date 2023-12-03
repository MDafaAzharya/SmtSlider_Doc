import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import "../assets/css/navbar.css";
import Pageone from "./pageOne";
import Pagetwo from "./Pagetwo";
import Pagethree from "./PageThree";

function Navbar() {
  return (
    <nav className="">
      <div className="md:flex md:justify-between md:pl-12 py-3 mt-3">
        <div className="flex md:justify-between justify-center">
          <div>
            <img src={logo} alt="" height={40} width={40} />
          </div>
          <div className="my-auto mt-2">
            <p className="title font-bold text-2xl pl-2 text-green-500">
              {" "}
              Smooets Slider{" "}
            </p>
          </div>
        </div>
        <div className="my-auto md:grid-cols-3 md:grid md::ml-auto md:pr-20 flex justify-center gap-8 md:gap-8 mt-3 md:mt-2">
          <Link
            to="Pageone"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-green-900 font-semibold hover:text-green-500 hover:scale-105 transition duration-500 p-1"
          >
            Home
          </Link>
          <Link
            to="Pagetwo"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-green-900 font-semibold hover:text-green-500 hover:scale-105 transition duration-500 p-1"
          >
            Fitur
          </Link>
          <Link
            to="Pagethree"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-green-900 font-semibold hover:text-green-500 hover:scale-105 transition duration-500 p-1"
          >
            Guide
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
