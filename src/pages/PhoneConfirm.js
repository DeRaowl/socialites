import React, { useState } from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function PhoneConfirm() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="Back btn" />
      </Link>
      <h1>Enter Your Phone!</h1>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Services and Policy</span> Thanks{" "}
      </p>
      <Link to="/code_confirm" className="primaryBtn align-items-center">
        Next <img src="/images/nextArrowIcon.svg" alt="next btn" />
      </Link>
    </div>
  );
}

export default PhoneConfirm;
