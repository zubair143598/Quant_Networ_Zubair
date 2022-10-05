import React from "react";

const Hero = () => {
  return (
    <div className="hero">

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5 " data-aos="fade-down-right">
          <h1 className="head1">The future of finance.<span className="today"> Today</span>.</h1>
          
          <button className="btn " >Get Started</button>
        </div>
        <div className=" col-md-6 viD">
        <video
              className="object-fit responsivevideo lazy entered loaded"
              autoPlay
              loop
              muted
              width='100%'
              src="Assists/video.mp4"
             />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
