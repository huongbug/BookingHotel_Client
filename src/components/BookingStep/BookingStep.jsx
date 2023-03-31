import React from "react";
import "./bookingStep.scss";
import step1 from "../../assets/img/booking/step1.png";

const Booking = () => {
  return (
    <>
      <section className="mb-5 mt-5 ml-2">
        <h3>Rooms & Rates</h3>
        <p>Plan your perfect stay at our hotel</p>
        <img src={step1} alt="" className="booking-step" />
      </section>
    </>
  );
};

export default Booking;
