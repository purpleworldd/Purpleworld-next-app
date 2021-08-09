import React from "react";
import Head from "next/head";
import Bedroom from "./bedroom";
import Drawingroom from "./drawingroom";
import Kitchen from "./kitchen";

function Services() {
  return (
    <>
      <Head>
        <title>Gallery | PurpleWorld</title>
      </Head>
      <Bedroom />
      <Drawingroom />
      <Kitchen />
    </>
  );
}

export default Services;
