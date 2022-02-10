import React, { useState } from "react";
import Koi from "../../public/assets/vectors/koi";

const Sidebar = () => {
  const [status, setStatus] = useState(true);
  return (
    <div className={`sidebar ${status && "open"}`}>
      <div
        className="sidebar-toggle"
        onClick={() => setStatus((curr) => !curr)}
      ></div>
      <div className="sidebar-options">
        <div className="sidebar-option active">
          <div className="sidebar-icon">
            <Koi />
          </div>
          <div className={`option-text ${!status && "hidden"}`}>Home</div>
        </div>
        <div className="sidebar-option">
          <div className="sidebar-icon">
            <Koi />
          </div>
          <div className={`option-text ${!status && "hidden"}`}>Settings</div>
        </div>
        <div className="sidebar-option">
          <div className="sidebar-icon">
            <Koi />
          </div>
          <div className={`option-text ${!status && "hidden"}`}>Account</div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
