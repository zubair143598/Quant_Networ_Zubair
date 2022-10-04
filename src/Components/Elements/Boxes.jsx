import React from "react";

const Boxes = () => {
  return (
    <div className="Box">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in-down">
            <img className="boximg" src="./Assists/Boxes.svg" alt="" />
          </div>
          <div className="col-md-6">
            <h1>Unlocking the power of blockchain for everyone</h1>
            <p>
              We deliver interoperable ecosystems and real-world solutions that
              lower costs, enable new business, and mitigate risk.
            </p>
            <button className="btn">Lets Talks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
