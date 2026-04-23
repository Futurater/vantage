import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We launched Vantage in 2024 with a single mission: remove every
            barrier that stands between an Indian investor and the markets.
            Whether it is cost, complexity, or lack of guidance — we are here
            to change that.
          </p>
          <p>
            Today, our AI-first platform and transparent pricing model are
            redefining what a trading experience should look like in India.
          </p>
          <p>
            Thousands of investors trust Vantage to manage their portfolios,
            execute trades at lightning speed, and get intelligent insights
            powered by Gemini AI.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
