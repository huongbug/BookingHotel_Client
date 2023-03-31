import React, { useState } from "react";
import "./user.scss";
import avatar from "../../assets/img/avatar.jpg";

const User = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="user">
      <form>
        <h2 style={{ marginBottom: "12px" }}>My account</h2>
        <div className="form-row">
          <img
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            src={avatar}
          />
        </div>
        <div style={{ marginTop: "30px" }} className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefaultUsername">Email</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                value={email}
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={phoneNumber}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefaultUsername">Password</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                value={password}
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value={firstName}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={lastName}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefaultUsername">Gender</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                value={gender}
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">Address</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              value={address}
              required
            />
          </div>
          <div className="col-md-6 mb-6">
            <label htmlFor="validationDefault04">Birthday</label>
            <input
              type="date"
              className="form-control"
              id="validationDefault04"
              value={birthday}
              required
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Update profile
        </button>
      </form>
    </div>
  );
};

export default User;
