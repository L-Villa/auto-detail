import React from "react";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          <div className="stats">
            <div className="heading">
              <h2 className="title">Our Numbers</h2>
              <p className="subtitle">
                Take a look at how we've done over the years.
              </p>
            </div>
            <div className="content">
              <div className="block">
                <h3>15</h3>
                <p>years of experience</p>
              </div>
              <div className="block">
                <h3>3k+</h3>
                <p>happy clients</p>
              </div>
              <div className="block">
                <h3>3</h3>
                <p>cities being served</p>
              </div>
              <div className="block">
                <h3>15k+</h3>
                <p>cars made spotless</p>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img src="./assets/images/blue.jpg" alt="blue car" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
