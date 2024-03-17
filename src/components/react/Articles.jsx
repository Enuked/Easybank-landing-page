import React from "react";
import "../../styles/layouts-scss/articles.scss";
import currency from "../../../public/images/image-currency.jpg";
import restaurant from "../../../public/images/image-restaurant.jpg";
import plane from "../../../public/images/image-plane.jpg";
import confetti from "../../../public/images/image-confetti.jpg";

function articles() {
  return (
    <div className="articles-container">
      <h1>Latest Articles</h1>
      <div className="img-articles">
        <div>
          <img src={currency.src} alt="currency" />
          <article>
            <p> By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </article>
        </div>

        <div>
          <img src={restaurant.src} alt="restaurant" />
          <article>
            <p> By Wilson Hutton</p>
            <h3>Treat yourself without worrying about money</h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </article>
        </div>

        <div>
          <img src={plane.src} alt="plane" />
          <article>
            <p> By Wilson Hutton</p>
            <h3>Take your Easybank card wherever you go</h3>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </article>
        </div>

        <div>
          <img src={confetti.src} alt="confetti" />
          <article>
            <p> By Claire Robinson</p>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default articles;
