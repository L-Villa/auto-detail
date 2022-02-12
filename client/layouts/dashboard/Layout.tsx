import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface IDashboardLayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: IDashboardLayoutProps) => {
  const [status, setStatus] = useState(true);
  return (
    <>
      <Sidebar status={status} setStatus={setStatus} />
      {children}
    </>
  );
};

export default Layout;
