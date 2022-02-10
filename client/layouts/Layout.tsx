import React from "react";
import Header from "./navigation/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
