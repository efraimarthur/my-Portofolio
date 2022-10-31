import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavBar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="containerLayout">
        <NavBar />
        <Header />
        <div className="contentLayout">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
