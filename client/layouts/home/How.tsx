import React from "react";

const How = () => {
  return (
    <section>
      <div className="content">
        <div className="container">
          <div className="description">
            <h3>
              Let's bring out the <br /> best of your car.
            </h3>
            <p>
              We'll take care of your car in a few simple steps. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Incidunt ab autem
              quis fuga voluptatem eveniet ducimus reiciendis? Eum, eligendi
              aliquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ad, autem?
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <h3>Book</h3>
              <p>
                Book online using our intuitive web application. Let us know the
                what, when, and where; we'll handle the rest.
              </p>
            </div>
            <div className="step">
              <h3>Deploy</h3>
              <p>
                One of our professionals will give you a call upon arrival.
                They'll just need access to your vehicle's interior.
              </p>
            </div>
            <div className="step">
              <h3>Complete</h3>
              <p>
                Once the work is done, your keys will be returned and you'll be
                able to enjoy a clean car again.
              </p>
            </div>
          </div>
          <img src="./assets/images/blue.jpg" alt="car" />
        </div>
      </div>
    </section>
  );
};

export default How;
