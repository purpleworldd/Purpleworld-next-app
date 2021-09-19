import Head from "next/head";
import React from "react";
import Navbar from "./nav";
import Footer from "./footer";

function layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Modular Kitchen, Modular Kitchen in Bengaluru, Modular Kitchen in Hyderabad, Modular Kitchen in New Delhi, Modular Kitchen in Kolkata, Modular Kitchen in Pune, Modular Design, Modular Design in Bengaluru, Modular Design in Hyderabad, Modular Design in New Delhi, Modular Design in Kolkata, Modular Design in Pune, Interior Designers, Interior Designers in Bengaluru, Interior Designers in Hyderabad, Interior Designers in New Delhi, Interior Designers in Kolkata, Interior Designers in Pune"
        />
      </Head>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}

export default layout;
