import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="logo">
          <img src="logo.png" />
        </div>

        <div className="title-large">Grandvote</div>
        <div className="title-large">Blockchain Based Voting System</div>
        <div className="title-small">Where transparency is the key</div>

        <div className="button-wrapper">
          <Link to="/login">
            <button className="button-black">Login</button>
          </Link>

          <Link to="/view">
            <button>Check Votes</button>
          </Link>
        </div>
      </div>

      <div className="right">
        <img src="vote.gif" />
      </div>
    </div>
  );
};

export default Landing;
