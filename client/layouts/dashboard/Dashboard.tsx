import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Home, User, Settings } from "../../public/assets/vectors/icons";

export const Sidebar = () => {
  const [status, setStatus] = useState(true);
  const { pathname } = useRouter();

  return (
    <div className={`sidebar ${status && "open"}`}>
      <div
        className="sidebar-toggle"
        onClick={() => setStatus((curr) => !curr)}
      >
        <Menu />
      </div>
      <div className="sidebar-options">
        <Link href="/dashboard">
          <a
            className={`sidebar-option ${pathname == "/dashboard" && "active"}`}
          >
            <div className="sidebar-icon">
              <Home />
            </div>
            <div className={`option-text ${!status && "hidden"}`}>Home</div>
          </a>
        </Link>
        <Link href="/dashboard/settings">
          <a
            className={`sidebar-option ${
              pathname == "/dashboard/settings" && "active"
            }`}
          >
            <div className="sidebar-icon">
              <Settings />
            </div>
            <div className={`option-text ${!status && "hidden"}`}>Settings</div>
          </a>
        </Link>
        <Link href="/dashboard/account">
          <a
            className={`sidebar-option ${
              pathname == "/dashboard/account" && "active"
            }`}
          >
            <div className="sidebar-icon">
              <User />
            </div>
            <div className={`option-text ${!status && "hidden"}`}>Account</div>
          </a>
        </Link>
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
