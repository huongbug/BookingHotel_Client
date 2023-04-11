import React, { useEffect, useState } from "react";
import "./user.scss";
import avatar from "../../assets/img/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { fetchUpdateUser } from "../../store/userSlice/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const User = () => {
  const user = useSelector((state) => state.user.value);

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [birthday, setBirthday] = useState(user.birthday);
  const [address, setAddress] = useState(user.address);
  const [avatar, setAvatar] = useState(user.address);
  const dispatch = useDispatch();

  const updateUser = (async (e) => {
    e.preventDefault();
    alert("ok");
    return;
    const result = await dispatch(
      fetchUpdateUser({
        userId: user.id,
        updateUserDto: {
          email,
          password,
          phoneNumber,
          firstName,
          lastName,
          gender,
          birthday,
          address,
          avatar,
        },
      })
    )
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        const data = originalPromiseResult.data;
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
        // handle result here
      });
  })();
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container">
          {/* Table */}
          <div className="row">
            <div className="col-xl-8 m-auto order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      <Link to="/" className="btn btn-sm btn-primary">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    // onSubmit={(e) => {
                    //   e.preventDefault();
                    //   alert("ok");
                    // }}
                    onSubmit={updateUser}
                  >
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="input-username"
                              className="form-control form-control-alternative"
                              placeholder="Email"
                              defaultValue={user && user.email}
                              onchange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Phone number
                            </label>
                            <input
                              type="text"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder="jesse@.com"
                              defaultValue={user && user.phoneNumber}
                              onchange={(e) => {
                                setPhoneNumber(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              placeholder="First name"
                              defaultValue={user && user.firstName}
                              onchange={(e) => {
                                setFirstName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              placeholder="Last name"
                              defaultValue={user && user.lastName}
                              onchange={(e) => {
                                setLastName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              id="input-city"
                              className="form-control form-control-alternative"
                              placeholder="City"
                              defaultValue={user && user.address}
                              onchange={(e) => {
                                setAddress(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <input
                              type="date"
                              id="input-postal-code"
                              className="form-control form-control-alternative"
                              placeholder="Postal code"
                              defaultValue={user && user.birthday}
                              onchange={(e) => {
                                setBirthday(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Gender
                            </label>
                            <select
                              className="custom-select"
                              style={{ width: "100%", height: "100%" }}
                              id="guest"
                              onchange={(e) => {
                                setGender(e.target.value);
                              }}
                            >
                              <option defaultValue={"Male"}>Male</option>
                              <option defaultValue={"Famale"}>Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Avatar
                            </label>
                            {user && user.avatar && (
                              <>
                                <input
                                  type="file"
                                  id="input-city"
                                  className="form-control form-control-alternative mb-4"
                                  placeholder="City"
                                  onchange={(e) => {
                                    setAvatar(e.target.value);
                                  }}
                                />
                                <img
                                  style={{
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "50%",
                                  }}
                                  src={user.avatar}
                                />
                              </>
                            )}
                            {user && !user.avatar && (
                              <input
                                type="file"
                                id="input-city"
                                className="form-control form-control-alternative"
                                placeholder="City"
                                onchange={(e) => {
                                  setAvatar(e.target.value);
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <button
                          to="/"
                          className="btn btn-sm btn-primary"
                          style={{ padding: "12px" }}
                        >
                          Update profile
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
