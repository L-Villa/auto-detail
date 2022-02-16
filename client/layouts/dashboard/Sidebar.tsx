import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Menu,
  Home,
  User,
  Settings,
  Car,
} from "../../public/assets/vectors/icons";

const Sidebar = ({ status, setStatus }: any) => {
  const {
    query: { param },
  } = useRouter();

  return (
    <div className={`sidebar ${status && "open"}`}>
      <div className="sidebar-toggle" onClick={() => setStatus(!status)}>
        <Menu />
      </div>
      <div className="sidebar-options">
        <Link href="/dashboard/home">
          <a className={`sidebar-option ${param == "home" && "active"}`}>
            <div className="sidebar-icon">
              <Home />
            </div>
            <div className={`option-text ${!status && "hidden"}`}>Home</div>
          </a>
        </Link>
        <Link href="/dashboard/vehicles">
          <a className={`sidebar-option ${param == "vehicles" && "active"}`}>
            <div className="sidebar-icon">
              <Car />
            </div>
            <div className={`option-text ${!status && "hidden"}`}>Vehicles</div>
          </a>
        </Link>
        <Link href="/dashboard/settings">
          <a className={`sidebar-option ${param == "settings" && "active"}`}>
            <div className="sidebar-icon">
              <Settings />
            </div>
            <div className={`option-text ${!status && "hidden"}`}>Settings</div>
          </a>
        </Link>
        <Link href="/dashboard/account">
          <a className={`sidebar-option ${param == "account" && "active"}`}>
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

export default Sidebar;
