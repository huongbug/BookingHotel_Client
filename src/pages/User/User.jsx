import React, { useState } from "react";
import "./user.scss";
import avatar from "../../assets/img/avatar.jpg";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user.value);

  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState(user.password);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [birthday, setBirthday] = useState(user.birthday);
  const [address, setAddress] = useState(user.address);

  console.log(user);

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
                value={email ? email : user.email}
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
              value={phoneNumber ? phoneNumber : user.phoneNumber}
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
                value={password ? password : user.password}
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
              value={firstName ? firstName : user.firstName}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={lastName ? lastName : user.lastName}
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
                value={gender ? gender : user.gender}
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
              value={address ? address : user.address}
              required
            />
          </div>
          <div className="col-md-6 mb-6">
            <label htmlFor="validationDefault04">Birthday</label>
            <input
              type="date"
              className="form-control"
              id="validationDefault04"
              value={birthday ? birthday : user.birthday}
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
