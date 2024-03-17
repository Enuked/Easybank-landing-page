import React from "react";
import "../../styles/layouts-scss/hero.scss";

function hero() {
  return (
    <div className="hero-container">
      <div className="hero-img-contain">
        <div className="hero-img">
          <img />
        </div>
        <div className="hero2-img">
          <img />
        </div>
      </div>
      <div className="description-container">
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.
        </p>
        <button>Request Invite</button>
      </div>
    </div>
  );
}

export default hero;
