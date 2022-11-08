import React from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import {
  AnimatedHover,
  AnimatedRotate,
  AnimatedGesture,
} from "../../components/FramerComponents";
// import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Junior", "Front-end", "Developer"],
    loop: [0], // Infinit,
    typeSpeed: [10],
    deleteSpeed: [10],
    // cursor: [1],
  });

  return (
    <div
      style={{ backgroundColor: "rgb(245, 236, 236)" }}
      className="headerHeight container-fluid"
    >
      <div className="row justify-content-evenly align-items-center d-flex flex-row-reverse">
        {/* <AnimatedGesture> */}
        <div className="col-md-6">
          <div className=" d-flex justify-content-center">
            <div
              className="rounded-circle p-3 bg-secondary bg-opacity-50"
              style={{ cursor: "pointer" }}
            >
              <div className="rounded-circle p-3 bg-secondary">
                <Image
                  className="rounded-circle p-3 bg-dark bg-opacity-25"
                  src={"/dog1.png"}
                  quality={20}
                  width={300}
                  height={300}
                  objectFit="cover"
                  // objectPosition="0px -100px"
                  alt="profile.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontWeight: "bold",
            // textTransform: "uppercase",
            // width: "90%",
            fontSize: "3em",
            fontFamily: "monospace",
          }}
          className="textHeader col-md-4 text-start"
        >
          <span
            className="text-white border rounded-end rounded-top bg-dark px-2"
            style={{ fontSize: "40%" }}
          >
            Hello
          </span>
          <span
            className="text-uppercase"
            style={{ fontSize: "50%", color: "#555" }}
          >
            {" "}
            {"I am"}{" "}
          </span>

          <span className={` ${styles.color}`}>{text}</span>
          <AnimatedGesture>
            <p
              className="text-dark text-uppercase"
              style={{ cursor: "pointer" }}
            >
              Arthur Efraim
            </p>
          </AnimatedGesture>
          <p style={{ fontSize: "60%", color: "#555" }}>Welcome to my Web</p>
        </div>
        {/* </AnimatedGesture> */}
      </div>
    </div>
  );
};

export default Header;
