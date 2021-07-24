import Head from "next/head";
import React from "react";
import Contact from "../components/contact";
import Process from "../components/process";

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact | PurpleWorld</title>
      </Head>
      <Contact />
      <Process />
    </div>
  );
}

export default ContactPage;
