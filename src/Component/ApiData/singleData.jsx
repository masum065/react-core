import React from "react";
import "./index.css";

function singlePost(props) {
  return (
    <div className="col-4">
      <article>
        <div className="card-body">
          <h2>{props.title}</h2>
          <p>{props.post}</p>
          <span className="font-size-1 font-weight-bold">
            Learn More <i className="fas fa-angle-right fa-sm ml-1"></i>
          </span>
        </div>
      </article>
    </div>
  );
}

export default singlePost;
