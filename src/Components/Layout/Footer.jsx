import React from "react";
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2 col-6">
          <ul className="list-unstyled">
            <li>
              <h5>WHO WE ARE</h5>
            </li>
            <li>Financial institutions</li>
            <li>Partners</li>
            <li>Enterprises </li>
            <li>Developers</li>
          </ul>
        </div>
        <div className="col-md-2 col-6">
          <ul className="list-unstyled">
            <li>
              <h5>WHAT WE DO</h5>
            </li>
            <li>Digital currencies</li>
            <li>Payments</li>
            <li>Supply chain and trade finance</li>
            <li>Capital markets</li>
            <li>Compliance</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div className="col-md-2 col-6">
          <ul className="list-unstyled">
            <li>
              <h5>HOW WE DO IT</h5>
            </li>
            <li>Products</li>
            <li>-Overledger Integrate</li>
            <li>-Overledger Tokenise</li>
            <li>Networks</li>
            <li>Ecosystem</li>
            <li>-Developer programme</li>
            <li>-Partners</li>
            <li>-Associations</li>
          </ul>
        </div>
        <div className="col-md-2 col-6">
          <ul className="list-unstyled">
            <li>
              <h5>WHY IT MATTERS</h5>
            </li>
            <li>All</li>
            <li>News</li>
            <li>Events</li>
            <li>Perspectives</li>
            <li>Research</li>
            <li>Use cases</li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="list-unstyled">
            <li><a href=""><h5> ABOUT US </h5></a></li>
            <li> <a href="">Mission and values</a></li>
            <li> <a href="">Leadership</a></li>
            <li> <a href="">Careers</a></li>
            <li> <a href="">Media centre</a></li>    
            
            <li> <a href="">Contact</a></li>
            
          </ul>
        </div>
      </div>
      <hr/>
      <div className="row row2">
        <div className="col-md-2">
          <img className="img" src="./Assists/logo-2.png" alt="" />
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2 col-4">
          <a href="#"><h6> Privacy policy</h6></a>
        </div>
        <div className="col-md-2 col-4"><a href="#"><h6>Terms of use</h6></a></div>
        <div className="col-md-2 col-4"><AiFillTwitterCircle size={34}/>
        <AiFillLinkedin size={34}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
