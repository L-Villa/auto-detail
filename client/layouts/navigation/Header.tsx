import React from "react";
import Link from "next/link";
import { Home } from "../../public/assets/vectors/icons";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row space-between align-center">
          <Link href="/">
            <a>
              <div className="logo">
                <Home />
              </div>
            </a>
          </Link>
          <ul className="menu">
            <Link href="/dashboard/home">
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href="/dashboard/home">
              <a>
                <li>Contact</li>
              </a>
            </Link>
            <Link href="/dashboard/home">
              <a>
                <li>Log in</li>
              </a>
            </Link>
            <Link href="/dashboard/home">
              <a>
                <li>Sign up</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
