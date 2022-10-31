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

const Header = () => {
  return (
    <div className="headerHome">
      <div className="bg-dark bg-opacity-25 headerOpacity">
        <div
          className="
      container-md d-flex flex-column align-items-center text-center"
        >
          <AnimatedGesture>
            <div
              style={{
                cursor: "pointer",
                letterSpacing: "5px",
                fontWeight: "bold",
                // textTransform: "capitalize",
              }}
              className="textHeader "
            >
              <p className="d-fle/x ">Arthur Efraim</p>
            </div>
          </AnimatedGesture>
          <Link href={"/#lorem"} passHref scroll={false}>
            <button
              type="button"
              className="btn btn-outline-light border btnHeader rounded-pill border-2 align-items-start px-5"
              // onClick={() => Router.push("/login")}
            >
              {"Hello"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
