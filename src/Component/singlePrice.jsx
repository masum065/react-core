import React from "react";
import "./pricing.css";
// import Photoshop from "./pricing-icon/photoshop.svg";

function singlePrice(props) {
  return (
    <div className="col-md-3">
      <div className="single-pricing">
        <div className="app-icon">
          <img src={props.icon} alt="" />
        </div>
        <div className="pricing-content-box">
          <h3 className="app-title">{props.appTitle}</h3>
          <p className="app-price">
            <span>US${props.price}</span>/mo
          </p>
          <p>{props.appDiscp}</p>
          <div className="price-footer">
            <div className="pf-left">
              <p>
                <input type="checkbox" name="price-agree" /> Add Adobe Stock,
                Get one month free.*
              </p>
            </div>
            <div className="pf-right">
              <a href="index" className="btn btn-success">
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singlePrice;
