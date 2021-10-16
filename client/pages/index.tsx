import type { NextPage } from "next";
import Hero from "../layouts/home/Hero";
import How from "../layouts/home/How";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <How />
    </>
  );
};

export default Home;
