import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import avatar from "../assets/img/avatar.jpg";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const user = useSelector((state) => state.user.value);
  console.log(user);
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
                  <i className="fa fa-phone" /> (12) 345 67890
                </li>
                <li>
                  <i className="fa fa-envelope" /> info.colorlib@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tn-right">
                <div className="top-social">
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
                </div>
                <a href="#" className="bk-btn">
                  Booking Now
                </a>
                <div className="language-option">
                  <img src={avatar} alt="" />
                  <span>
                    {user?.firstName?.concat(" " + user?.lastName)}{" "}
                    <i className="fa fa-angle-down" />
                  </span>
                  <div style={{ width: "200px" }} className="flag-dropdown">
                    <ul>
                      <li style={{ padding: "8px" }}>
                        <Link to="/user">Thông tin cá nhân</Link>
                      </li>
                      <li style={{ padding: "8px" }}>
                        <Link to="/booking">Thông tin đặt hàng</Link>
                      </li>
                    </ul>
                  </div>
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
                <a href="./index.html">
                  <img src="../assets/img/logo.png" alt="" />
                </a>
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
                      <a href="./pages.html">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <Link to={"/room-detail/1"}>Room Details</Link>
                        </li>
                        <li>
                          <Link to={"/blog-detail/1"}>Blog Details</Link>
                        </li>
                        <li>
                          <a href="#">Family Room</a>
                        </li>
                        <li>
                          <a href="#">Premium Room</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/blog"}>News</Link>
                    </li>
                    <li>
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="nav-right search-switch">
                  <i className="icon_search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
