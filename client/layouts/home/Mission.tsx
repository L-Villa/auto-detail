import React from "react";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="row justify-center">
          <div className="tagline">
            Cleanliness is what <br /> we strive for
          </div>
          <div className="mission-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              amet nostrum obcaecati recusandae quod harum quas sed veniam
              repellat eum illum possimus libero quisquam id. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Culpa, delectus. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, iusto? Lorem ipsum, dolor sit amet consectetur
              adipisicing.
            </p>
            <Link href="/about">
              <a>More About Us</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
