import React from "react";
import "../App.css";

export default function FrontContainer() {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 mt-2 text-center bgcolor">
      <h3 className="fw-normal text-muted mb-2 text">Welcome...</h3>
      <div className="row">
        <div className="col-sm-6 mb-2 mb-sm-0">
          <div className="card">
          <img src="/3.jpg"/>
          </div>
          <h5 className="text-muted fw-normal p-2">Find your favorites receipes here.</h5>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src="/2.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
}
