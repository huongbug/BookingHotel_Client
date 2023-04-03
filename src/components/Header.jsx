import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import avatar from "../assets/img/avatar.jpg";
import storageService from "../services/storage.service";
import logo from "../assets/img/logo.png";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const user = useSelector((state) => state.user.value);
  const token = storageService.get("token");
  let isActive = false;

  // useEffect(async () => {}, []);
  // ...

  return (
    <header className="header-section">
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="tn-left">
                <li>
                  <i className="fa fa-phone" /> 0-842343
                </li>
                <li>
                  <i className="fa fa-envelope" /> huongbug@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tn-right">
                {/* <div className="top-social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-tripadvisor" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </div> */}
                <Link className="bk-btn" to="/booking">
                  Booking Now
                </Link>
                <div className="language-option">
                  {!token && (
                    <Link className="bk-btn" to="/auth/login">
                      Login
                    </Link>
                  )}
                  {token && (
                    <>
                      <img src={user && user.avatar} alt="" />
                      <span>
                        {user?.firstName?.concat(" " + user?.lastName)}{" "}
                        <i className="fa fa-angle-down" />
                      </span>
                      <div style={{ width: "200px" }} className="flag-dropdown">
                        <ul>
                          <li style={{ padding: "8px" }}>
                            <Link to="/user">My Account</Link>
                          </li>
                          {user.roleName == "ROLE_ADMIN" && (
                            <li style={{ padding: "8px" }}>
                              <Link to="/admin/users">Manament</Link>
                            </li>
                          )}
                          <li style={{ padding: "8px" }}>
                            <Link to="/booking-detail">Booking Detail</Link>
                          </li>
                          <li
                            onClick={() => {
                              storageService.remove("token");
                              window.location.href = "/auth/login";
                            }}
                            style={{ padding: "8px" }}
                          >
                            <div>Logout</div>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="nav-menu">
                <nav className="mainmenu">
                  <ul>
                    <li className={pathName == "/" ? "active" : ""}>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className={pathName == "/rooms" ? "active" : ""}>
                      <Link to={"/rooms"}>Rooms</Link>
                    </li>
                    <li className={pathName == "/about-us" ? "active" : ""}>
                      <Link to={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/blogs"}>News</Link>
                    </li>
                    {/* <li>
                      <a href="./contact.html">Contact</a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
