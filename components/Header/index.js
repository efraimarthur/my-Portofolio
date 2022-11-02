import React from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatedHover,
  AnimatedRotate,
  AnimatedGesture,
} from "../../components/FramerComponents";
// import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["a Junior Front-end Developer", "a Dota 2 player"],
    loop: [0], // Infinit,
    typeSpeed: [50],
    deleteSpeed: [50],
    // cursor: [1],
  });

  return (
    <div className="headerHome">
      <div className="bg-dark bg-opacity-50 headerOpacity ">
        <div className="container-md d-/flex flex-column align-items/-center text-ce/nter bo/rder">
          {/* <AnimatedGesture> */}
          <div
            style={{
              cursor: "pointer",
              letterSpacing: "3px",
              // fontWeight: "bold",
              // textTransform: "uppercase",
              width: "90%",
            }}
            className="textHeader"
          >
            <span style={{ color: "salmon" }} className="me-2">
              Arthur Efraim{" "}
            </span>
            <span style={{ color: "white" }} className="w-50">
              {text}
            </span>
          </div>
          {/* </AnimatedGesture> */}
          <Link href={"/#lorem"} passHref scroll={false}>
            <button
              type="button"
              className="btn btn-outline-light border btnHeader rounded-pill border-2 align-items-start px-5 py-3"
              style={{ position: "relative" }}
              // onClick={() => Router.push("/login")}
            >
              More About me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
