import type { NextPage } from "next";
import Hero from "../layouts/home/Hero";
import How from "../layouts/home/How";
import Images from "../layouts/home/Images";
import Mission from "../layouts/home/Mission";
import Pricing from "../layouts/home/Pricing";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <How />
      <Mission />
      <Images />
      <Pricing />
    </>
  );
};

export default Home;
