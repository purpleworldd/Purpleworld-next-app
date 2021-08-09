import React, { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import { AuthProvider } from "../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
