import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../layouts/dashboard/Layout";

const Param = () => {
  const { query } = useRouter();
  return (
    <div className="dashboard">
      <Layout>
        <section className="dashboard-content">
          {query.param === "home" && <Home />}
        </section>
      </Layout>
    </div>
  );
};

const Home = () => {
  return (
    <div className="dashboard-container">
      <QuickOrder />
      <Weather />
    </div>
  );
};

const QuickOrder = () => {
  return (
    <div className="dashboard-card quick-order-card">
      <h2>
        Ready for your <br />
        cars next wash?
      </h2>
      <p>Tell us a little bit about what your car needs.</p>
      <button>Get Started --</button>
    </div>
  );
};

const Weather = () => {
  const [days, setdays] = useState([
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
  ]);
  return (
    <div className="dashboard-card weather-card">
      {days.map((day, index) => (
        <div className="date" key={index}>
          <div className="icon"></div>
          <div className="num">{25 + index}</div>
          <div className="day">{day}</div>
        </div>
      ))}
    </div>
  );
};

export default Param;
