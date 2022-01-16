import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          We are working hard to get socialites ready for everyone! While we
          wrap up the finishing touches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          tempora labore ipsum, earum dignissimos omnis ea quidem hic iure.
          Placeat, non. Animi maxime explicabo quisquam consequuntur assumenda?
          Consectetur, voluptas ea.
        </p>
        <p>connect the dots & the clubhouse team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          to="/get_username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username
          {/* <img
            src="https://randomuser.me/api/portraits/men/47.jpg"
            alt="randomImg"
          /> */}
        </Link>
        <Link to="/">Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}

export default Welcome;
