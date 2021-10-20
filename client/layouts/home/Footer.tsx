import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row justify-center">
          <div className="logo"></div>
          <div className="information">
            <div className="heading">Information</div>
            <Link href="/about">
              <a>About Us</a>
            </Link>
            <Link href="/about">
              <a>How It Works</a>
            </Link>
            <Link href="/about">
              <a>Contact Us</a>
            </Link>
          </div>
          <div className="information">
            <div className="heading">Services</div>
            <Link href="/about">
              <a>My Account</a>
            </Link>
            <Link href="/about">
              <a>Order History</a>
            </Link>
            <Link href="/about">
              <a>Locations</a>
            </Link>
          </div>
          <div className="information">
            <div className="heading">Contact</div>
            <div className="details address">
              12345 Main St <br /> State, ZZ 12345
            </div>
            <div className="details number">+1 123 555 0101</div>
            <div className="details email">contact@example.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
