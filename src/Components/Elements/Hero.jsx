import React from "react";

const Hero = () => {
  return (
    <div className="hero">

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 " data-aos="fade-down-right">
          <h1>The future of finance.<span className="today"> Today</span>.</h1>
          
          <button className="btn " >Get Started</button>
        </div>
        <div className=" col-md-6 viD">
          <video autoPlay muted>
            <source src="./Assists/video.mp4" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
