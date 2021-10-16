import type { NextPage } from "next";
import Hero from "../layouts/home/Hero";
import How from "../layouts/home/How";
import Images from "../layouts/home/Images";
import Mission from "../layouts/home/Mission";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <How />
      <Mission />
      <Images />
    </>
  );
};

export default Home;
