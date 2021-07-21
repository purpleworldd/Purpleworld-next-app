import Head from "next/head";
import Image from "next/image";
import Main from "../components/home";
import styles from "../styles/Home.module.css";
import ValueProp from "../components/value-prop";
import About from "../components/about";
import Gallery from "../components/gallery";
import Service from "../components/service";
import Testimonials from "../components/testimonials";
import FAQs from "../components/faq";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Main />
      <ValueProp />
      <About />
      <Gallery />
      <Service />
      <FAQs />
      <Testimonials />
      <Contact />
    </div>
  );
}
