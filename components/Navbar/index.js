import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
// import { Icon } from "@iconify/react";

const NavBar = () => {
  const [scroll, setScroll] = useState(1);

  //change navbar on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 500;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      // bg="dark"
      variant="dark"
      className={scroll ? "fixed-top navTop" : "navSetting fixed-top"}
    >
      <Container>
        <Navbar.Brand
          className="navBrand"
          href="/"
          style={{ fontSize: "24px" }}
        >
          {/* <Icon icon="cib:next-js" /> */}
          {"Ture"}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggleNav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="mx-auto px-2 py-0 nav-bungkus">
            <Link href={""} passHref>
              <Nav.Link className="btnNav home px-/2 mx-1 d-flex justify-content-center">
                Home
              </Nav.Link>
            </Link>
            <Link href={"#anjing"} passHref scroll={false}>
              <Nav.Link className="btnNav about px-2 mx-1 d-flex justify-content-center">
                About
              </Nav.Link>
            </Link>
            <Link href={"login"} passHref>
              <Nav.Link className="btnNav login px-2 mx-1 d-flex justify-content-center ">
                Login
              </Nav.Link>
            </Link>
            <Link href={"#learn"} passHref scroll={false}>
              <Nav.Link className="btnNav pudge px-2 mx-1 d-flex justify-content-center ">
                More
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="m/x-auto">
            <Link href={"#contact"} passHref scroll={false}>
              <Nav.Link className="btnNav contact d-flex mx-1 px-2 justify-content-center">
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
