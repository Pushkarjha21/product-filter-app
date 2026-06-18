import React from "react";

const Error = () => {
  return (
    <div>
      <div id="background"></div>
      <div className="top">
        <h1 id="errorh1">404</h1>
        <h3 id="errorh3">page not found</h3>
      </div>
      <div className="container">
        <div className="ghost-copy">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="bottom">
        <p id="errorp">Boo, looks like a ghost stole this page!</p>

        <div className="buttons">
          <button className="btn">Back</button>
          <button className="btn">Home</button>
        </div>
      </div>
    </div>
  );
};

export default Error;
