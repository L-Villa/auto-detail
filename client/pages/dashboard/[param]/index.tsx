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
      <History />
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
  const [days, setDays] = useState([
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

const History = () => {
  const [orders, setOrders] = useState([
    {
      type: "wash",
      name: "Deluxe",
      vehicle: "4-Door Sedan",
      price: 40,
    },
    {
      type: "wash",
      name: "Deluxe",
      vehicle: "4-Door Sedan",
      price: 40,
    },
    {
      type: "wash",
      name: "Deluxe",
      vehicle: "4-Door Sedan",
      price: 40,
    },
  ]);
  return (
    <div className="dashboard-card history-card">
      {orders.map(({ name, vehicle, price }, index) => (
        <div className="order">
          <div className="data icon"></div>
          <div className="data name">{name}</div>
          <div className="data vehicle">{vehicle}</div>
          <div className="data price">{price}</div>
        </div>
      ))}
    </div>
  );
};

export default Param;
