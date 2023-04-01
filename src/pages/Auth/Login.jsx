import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import slider1 from "../../assets/img/hero/hero-1.jpg";
import slider2 from "../../assets/img/hero/hero-2.jpg";
import slider3 from "../../assets/img/hero/hero-3.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchLogin, fetchRegister } from "../../store/authSlice/authSlice";
import { setToken } from "../../store/tokenSlice/tokenSlice";
import { redirect } from "react-router-dom";
import storageService from "../../services/storage.service";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isBounceActive, setIsBounceActive] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [newEmailOrPhone, setNewEmailOrPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newBirthday, setNewBirthday] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const dispatch = useDispatch();

  const signUpButton = () => {
    setIsBounceActive(true);
  };
  const signInButton = () => {
    setIsBounceActive(false);
  };
  const loginFunc = async () => {
    const result = await dispatch(
      fetchLogin({
        emailOrPhone,
        password,
      })
    )
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        // console.log(originalPromiseResult);
        const token = originalPromiseResult.data.accessToken;
        const index = originalPromiseResult.data.authorities.findIndex(
          (role) => {
            return role.authority == "ROLE_ADMIN";
          }
        );
        storageService.set("token", token);
        if (index == "-1") {
          window.location.href = "/";
        } else {
          window.location.href = "/admin/users";
        }
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
        // handle result here
      });
  };
  const registerFunc = async () => {
    console.log(
      newEmailOrPhone,
      newPassword,
      newPhoneNumber,
      newFirstName,
      newLastName,
      newGender,
      newBirthday,
      newAddress
    );
    const result = await dispatch(
      fetchRegister({
        email: newEmailOrPhone,
        password: newPassword,
        phoneNumber: newPhoneNumber,
        firstName: newFirstName,
        lastName: newLastName,
        gender: newGender,
        birthday: newBirthday,
        address: newAddress,
      })
    )
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        window.location.href = "/auth/login";
        console.log(originalPromiseResult);
        // handle result here
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
        // handle result here
      });
  };

  return (
    <section className="login">
      <OwlCarousel
        style={{ position: "absolute", top: "0" }}
        className="owl-main hero-slider"
        items={1}
        loop
        autoplay
        dots={false}
      >
        <div className="item hs-item set-bg">
          <img style={{ height: "100%" }} src={slider1} alt="" />
        </div>
        <div className="item item hs-item set-bg">
          <img style={{ height: "100%" }} src={slider2} alt="" />
        </div>
        <div className="item item hs-item set-bg">
          <img style={{ height: "100%" }} src={slider3} alt="" />
        </div>
      </OwlCarousel>
      <div className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">
                Don't have an account?
              </h2>
              <p className="user_unregistered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft
                beer whatever street art fap.
              </p>
              <button
                className="user_unregistered-signup"
                id="signup-button"
                onClick={signUpButton}
              >
                Sign up
              </button>
            </div>
            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft
                beer whatever street art fap.
              </p>
              <button
                className="user_registered-login"
                id="login-button"
                onClick={signInButton}
              >
                Login
              </button>
            </div>
          </div>
          <div
            className={`user_options-forms ${
              isBounceActive ? "bounceLeft" : "bounceRight"
            }`}
            id="user_options-forms"
          >
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form" onSubmit={handleSubmit(loginFunc)}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required=""
                      autoFocus=""
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      placeholder="Password"
                      className="forms_field-input"
                      required=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">
                    Forgot password?
                  </button>
                  <input
                    type="submit"
                    defaultValue="Log In"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form
                className="forms_form"
                onSubmit={handleSubmit(registerFunc)}
              >
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="forms_field-input"
                      required=""
                      value={newEmailOrPhone}
                      onChange={(e) => setNewEmailOrPhone(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="text"
                      placeholder="Phone Nụmber"
                      className="forms_field-input"
                      required=""
                      value={newPhoneNumber}
                      onChange={(e) => setNewPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="password"
                      placeholder="Password"
                      className="forms_field-input"
                      required=""
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="forms_field-input"
                      required=""
                      value={newFirstName}
                      onChange={(e) => setNewFirstName(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="forms_field-input"
                      required=""
                      value={newLastName}
                      onChange={(e) => setNewLastName(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <label for="male">Male</label>{" "}
                    <input
                      style={{ marginRight: "12px" }}
                      id="male"
                      type="radio"
                      value="Male"
                      name="gender"
                      onChange={(e) => setNewGender(e.target.value)}
                    />
                    <label for="female">Femle</label>{" "}
                    <input
                      name="gender"
                      id="female"
                      type="radio"
                      value="Female"
                      onChange={(e) => setNewGender(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="date"
                      placeholder="Birthday"
                      className="forms_field-input"
                      required=""
                      onChange={(e) => setNewBirthday(e.target.value)}
                    />
                  </div>
                  <div className="forms_field">
                    <input
                      type="text"
                      placeholder="Address"
                      className="forms_field-input"
                      required=""
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input
                    type="submit"
                    defaultValue="Sign up"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
