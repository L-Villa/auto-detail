import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../layouts/dashboard/Layout";

const Param = () => {
  const { query } = useRouter();
  return (
    <div className="dashboard">
      <Layout>
        <section className="dashboard-content">{query.param}</section>
      </Layout>
    </div>
  );
};

export default Param;
