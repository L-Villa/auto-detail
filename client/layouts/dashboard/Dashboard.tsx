import React, { useState } from "react";
import { Menu, Home, User, Settings } from "../../public/assets/vectors/icons";

const Sidebar = () => {
  const [status, setStatus] = useState(true);
  return (
    <div className={`sidebar ${status && "open"}`}>
      <div
        className="sidebar-toggle"
        onClick={() => setStatus((curr) => !curr)}
      >
        <Menu />
      </div>
      <div className="sidebar-options">
        <div className="sidebar-option active">
          <div className="sidebar-icon">
            <Home />
          </div>
          <div className={`option-text ${!status && "hidden"}`}>Home</div>
        </div>
        <div className="sidebar-option">
          <div className="sidebar-icon">
            <Settings />
          </div>
          <div className={`option-text ${!status && "hidden"}`}>Settings</div>
        </div>
        <div className="sidebar-option">
          <div className="sidebar-icon">
            <User />
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
