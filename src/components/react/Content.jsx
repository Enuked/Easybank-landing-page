import React from "react";
import "../../styles/layouts-scss/content.scss";
import OnlineBanking from '../../../public/images/icon-online.svg';
import SimpleBudgeting from '../../../public/images/icon-budgeting.svg';
import FastOnboarding from '../../../public/images/icon-onboarding.svg';
import OpenAPI from '../../../public/images/icon-api.svg';


function hero() {
  return (
    <div className="content-container">
      <div>
      <div className="why">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      </div>
      <div className="contents-icons">
      <div className="cons">
        <img src={OnlineBanking.src} alt="Online Banking Image" />
        <h3>Online Banking</h3>
        <p>
          Our modern web and mobile application allow you to keep track of your
          finances whenever you are in the world.
        </p>
      </div>

      <div className="cons">
        <img src={SimpleBudgeting.src} alt="Simple Budgeting" />
        <h3>Simple Budgeting</h3>
        <p>
          See exactly where your money goes each month. Recieve notifications
          when you're close to hitting limits
        </p>
      </div>

      <div className="cons">
        <img src={FastOnboarding.src} alt="Fast Onboarding" />
        <h3>Fast Onboarding</h3>
        <p>
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
      </div>

      <div className="cons">
        <img src={OpenAPI.src} alt="Open API" />
        <h3>Open API</h3>
        <p>
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>
      </div>
    </div>
  );
}

export default hero;
