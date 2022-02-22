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
      <Vehicles />
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
      id: 1453,
      type: "wash",
      name: "Platinum",
      vehicle: "White Sedan",
      amount: 80,
    },
    {
      id: 2453,
      type: "wash",
      name: "Gold",
      vehicle: "Black SUV",
      amount: 40,
    },
    {
      id: 3438,
      type: "wash",
      name: "Gold",
      vehicle: "Red Electric",
      amount: 60,
    },
    {
      id: 3678,
      type: "wash",
      name: "Gold",
      vehicle: "Red Electric",
      amount: 40,
    },
  ]);
  return (
    <div className="history-card">
      <div className="heading">Transaction History</div>
      <table>
        <tr>
          <th className="data">#</th>
          <th className="data">Package</th>
          <th className="data">Vehicle</th>
          <th className="data">Amount</th>
        </tr>
        {orders.map(({ id, name, vehicle, amount }, index) => (
          <tr className="order" key={index}>
            <td className="data icon">#{id}</td>
            <td className="data name">{name}</td>
            <td className="data vehicle">{vehicle}</td>
            <td className="data amount">${amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
  ]);
  return (
    <div className="history-card">
      <div className="heading">Vehicles</div>
      <div className="vehicle">
        <div className="car">
          <div className="title">Custom Car Name</div>
          <div className="subtitle">7XLE408</div>
          <div className="stats">
            <div className="block">
              <div className="sub">Times washed</div>
              <h4>12</h4>
            </div>
            <div className="block">
              <div className="sub">Days since last wash</div>
              <h4>3</h4>
            </div>
            <div className="block">
              <div className="sub">Days since last wash</div>
              <h4>3</h4>
            </div>
          </div>
          <img src="/assets/images/astonMartin.png"></img>
          <div className="buttons">
            <button className="filled">Wash Now</button>
            <button className="border">Edit Vehicle</button>
          </div>
        </div>
        <div className="info-container">
          <div className="calendar"></div>
          <div className="information">
            <div className="data type">
              <span>Year:</span> 2020
            </div>
            <div className="data plate">
              <span>Make:</span> Toyota
            </div>
            <div className="data plate">
              <span>Model:</span> Camry
            </div>
            <div className="data plate">
              <span>Registration:</span> A970J7E
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Param;
