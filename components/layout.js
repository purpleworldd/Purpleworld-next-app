import React from "react";
import Navbar from "./nav";
import Footer from "./footer";

function layout({ children }) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}

export default layout;
