import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Explore = () => {
  return (
    <div className="container-fluid  banner1">
      <div className="explore container">
        <div className="row">
          <div className="col-md-7  "></div>
          <div className="card col-md-5" style={{ width: "33.2rem" }}>
            <div className="card-body ">
              <h5 className="card-title">News</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                29 septumber 2022
              </h6>
              <h3 className="headdinghover">
                29 September 2022 Martin Hargreaves on the benefits of CBDCs for
                consumers
              </h3>
              <a href="#" className="card-link">
                CBDC
              </a>
              <a href="#" className="card-link">
                CITYAM
              </a>
              <a href="#" className="card-link">
                ENTERPRISES
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container cards">
        <div className="row">
          <div className="col-md-3">
            <div className="top">
              <div className="card" style={{ width: "18rem" ,height:"16rem"}}>
                <div className="card-body ">
                  <h5 className="card-title">News</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    29 septumber 2022
                  </h6>
                  <h4 className="headdinghover">
                    Martin Hargreaves on the benefits of CBDCs for consumers
                  </h4>
                  <a href="#" className="card-link">
                    CBDC
                  </a>
                  <a href="#" className="card-link">
                    CITYAM
                  </a>
                  <a href="#" className="card-link">
                    ENTERPRISES
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="top">
              <div className="card" style={{ width: "18rem",height:"16rem" }}>
                <div className="card-body ">
                  <h5 className="card-title">News</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    29 septumber 2022
                  </h6>
                  <h4 className="headdinghover">15 September 2022 Gilbert Verdian explains The Merge</h4>
                  <a href="#" className="card-link">
                    CBDC
                  </a>
                  <a href="#" className="card-link">
                    CITYAM
                  </a>
                  <a href="#" className="card-link">
                    ENTERPRISES
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="top">
              <div className="card" style={{ width: "18rem" ,height:"16rem"}}>
                <div className="card-body ">
                  <h5 className="card-title">News</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    29 septumber 2022
                  </h6>
                  <h4 className="headdinghover">
                  The multi-chain future: sidechains, layer 2s and The Merge
                  </h4>
                  <a href="#" className="card-link">
                    CBDC
                  </a>
                  <a href="#" className="card-link">
                    CITYAM
                  </a>
                  <a href="#" className="card-link">
                    ENTERPRISES
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="top">
              <div className="card" style={{ width: "18rem" ,height:"16rem"}}>
                <div className="card-body ">
                  <h5 className="card-title">News</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    29 septumber 2022
                  </h6>
                  <h4 className="headdinghover">
                  Overledger 2.2.14 is an engineering release  
                  </h4>
                  <a href="#" className="card-link">
                    CBDC
                  </a>
                  <a href="#" className="card-link">
                    CITYAM
                  </a>
                  <a href="#" className="card-link">
                    ENTERPRISES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11"></div>
          <div
            className="col-md-1"
            style={{ marginTop: "34px", fontSize: "20px" }}
          >
            <p>
              More <BsArrowRight style={{ color: "gray" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
