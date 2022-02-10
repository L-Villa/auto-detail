import type { NextPage } from "next";
import Footer from "../layouts/home/Footer";
import Hero from "../layouts/home/Hero";
import How from "../layouts/home/How";
import Images from "../layouts/home/Images";
import Mission from "../layouts/home/Mission";
import Placeholder from "../layouts/home/Placeholder";
import Pricing from "../layouts/home/Pricing";
import Stats from "../layouts/home/Stats";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Placeholder />
      <How />
      <Mission />
      <Images />
      <Pricing />
      <Stats />
      <Footer />
    </>
  );
};

export default Home;
