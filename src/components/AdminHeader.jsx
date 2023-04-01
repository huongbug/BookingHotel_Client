import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.jpg";
import logout from "../assets/img/admin/log-out.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [isBlock, setIsBlock] = useState(false);
  const user = useSelector((state) => state.user.value);
  // console.log(user);
  return (
    <div className="header">
      <div className="header-left active">
        <a href="index.html" className="logo">
          <img src={logo} alt="" />
        </a>
        <a href="index.html" className="logo-small">
          <img src={logo} alt="" />
        </a>
        <a id="toggle_btn" href="javascript:void(0);"></a>
      </div>
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      <ul className="nav user-menu" onClick={() => setIsBlock(!isBlock)}>
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle nav-link userset"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img src={avatar} alt="" />
              <span className="status online" />
            </span>
          </a>
          <div
            style={{
              display: isBlock == true ? "block" : "none",
              top: "-70%",
              left: "-100%",
            }}
            className="dropdown-menu menu-drop-user"
          >
            <div className="profilename">
              <div className="profileset">
                <span className="user-img">
                  <img src={avatar} alt="" />
                  <span className="status online" />
                </span>
                <div className="profilesets">
                  <h6>John Doe</h6>
                  <h5>Admin</h5>
                </div>
              </div>
              <hr className="m-0" />
              <Link to="/user" className="dropdown-item">
                <i className="me-2" data-feather="user" />
                My Profile
              </Link>
              <a className="dropdown-item" href="generalsettings.html">
                <i className="me-2" data-feather="settings" />
                Settings
              </a>
              <hr className="m-0" />
              <a className="dropdown-item logout pb-0" href="signin.html">
                <img src={logout} className="me-2" alt="img" />
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;
