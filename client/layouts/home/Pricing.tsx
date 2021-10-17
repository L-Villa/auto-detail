import React from "react";
import Card from "../../components/Card";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="header">
          <h3 className="title">Our Pricing</h3>
          <p className="subtitle">
            Choose the package that best suits your needs.
          </p>
        </div>
        <div className="row justify-center">
          <Card
            title="Bronze"
            price="19.99"
            options={["Brush wash", "Hand dry", "Tire Shine", "Vacuuming"]}
            active={false}
          />
          <Card
            title="Gold"
            price="39.99"
            options={["Hand wash", "Hand dry", "Tire Shine", "Vacuuming"]}
            active={true}
          />
          <Card
            title="Platinum"
            price="99.99"
            options={[
              "Hand wash",
              "Hand dry",
              "Wax",
              "Console Deep Clean",
              "Vacuuming",
              "Tire Shine",
            ]}
            active={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
