import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
// import { Icon } from "@iconify/react";

const NavBar = () => {
  const [scroll, setScroll] = useState(1);

  //change navbar on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 500;
      if (scroll !== scrollCheck) {
        setScroll(scrollCheck);
        // console.log(scrollCheck);
      }
    });
  });
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      // bg="dark"
      // variant="light"
      className={scroll ? "fixed-top navTop" : "fixed-top shadow navSetting "}
    >
      <Container>
        <Navbar.Brand
          className="navBrand"
          href="/"
          style={{ fontSize: "1.5em" }}
        >
          {/* <Icon icon="cib:next-js" /> */}
          {"Ture"}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggleNav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="mx-auto px-2 py-0 nav-bun/gkus">
            <Link href={""} passHref>
              <Nav.Link
                id="gaul"
                // style={{ color: "green" }}
                className={`btnNav home ${styles.navButton}`}
                // className="bg-primary"
              >
                Home
              </Nav.Link>
            </Link>
            <Link href={"#about"} passHref scroll={false}>
              <Nav.Link
                // style={{ color: "black" }}
                className={`btnNav about px-2 mx-1 d-flex ${styles.navButton}`}
              >
                About
              </Nav.Link>
            </Link>
            {/* <Link href={"#games"} passHref scroll={false}>
              <Nav.Link className="btnNav pudge px-2 mx-1 d-flex ">
                FavGames
              </Nav.Link>
            </Link> */}
            {/* <Link href={"login"} passHref>
              <Nav.Link className="btnNav login px-2 mx-1 d-flex ">
                Login
              </Nav.Link>
            </Link> */}
            {/* <Link href={"#learn"} passHref scroll={false}>
              <Nav.Link className="btnNav pudge px-2 mx-1 d-flex ">
                Skills
              </Nav.Link>
            </Link> */}
            <Link href={"#contact"} passHref scroll={false}>
              <Nav.Link
                // style={{ color: "black" }}
                className={`btnNav contact d-flex mx-1 px-2 ${styles.navButton}`}
              >
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
