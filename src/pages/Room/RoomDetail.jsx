import Title from "../../components/Title";
import roomDetail from "../../assets/img/room/room-details.jpg";
import reviewer from "../../assets/img/room/avatar/avatar-1.jpg";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchGetRoom } from "../../store/roomSlice/roomSlice";

const RoomDetail = () => {
  let { roomId } = useParams();
  const dispatch = useDispatch();

  const [room, setRoom] = useState({});

  useEffect(() => {
    (async () => {
      const result = await dispatch(fetchGetRoom(roomId))
        .then(unwrapResult)
        .then((originalPromiseResult) => {
          setRoom(originalPromiseResult.data);
          console.log(originalPromiseResult.data);
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
          // handle result here
        });
    })();

    // return () => {}; // no-op
  }, [roomId]);

  return (
    <div>
      <Header />
      {Title("Our Rooms", "Rooms")}
      {/* Breadcrumb Section End */}
      {/* Rooms Section Begin */}
      <section className="room-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="room-details-item">
                <img
                  style={{ width: "100%", height: "450px" }}
                  src={room && room.medias?.[0]?.url}
                  alt=""
                />
                <div className="rd-text">
                  <div className="rd-title">
                    <h3>{room.title}</h3>
                    <div className="rdt-right">
                      <div className="rating">
                        <i className="icon_star" />
                        <i className="icon_star" />
                        <i className="icon_star" />
                        <i className="icon_star" />
                        <i className="icon_star-half_alt" />
                      </div>
                      <Link to="/booking">Booking Now</Link>
                    </div>
                  </div>
                  <h2>
                    {room.price}$<span>/Pernight</span>
                  </h2>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Type:</td>
                        <td>{room.type}</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion {room.maxNum}</td>
                      </tr>
                      <tr>
                        <td className="r-o">Floor:</td>
                        <td>{room.floor}</td>
                      </tr>
                      {/* <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr> */}
                    </tbody>
                  </table>
                  <p className="f-para">{room.description}</p>
                </div>
              </div>
              <div className="rd-reviews">
                <h4>Reviews</h4>
                <div className="review-item">
                  <div className="ri-pic">
                    <img src={reviewer} alt="" />
                  </div>
                  <div className="ri-text">
                    <span>27 Aug 2019</span>
                    <div className="rating">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star-half_alt" />
                    </div>
                    <h5>Brandon Kelley</h5>
                    <p>
                      Neque porro qui squam est, qui dolorem ipsum quia dolor
                      sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora. incidunt ut labore et dolore
                      magnam.
                    </p>
                  </div>
                </div>
                <div className="review-item">
                  <div className="ri-pic">
                    <img src={reviewer} alt="" />
                  </div>
                  <div className="ri-text">
                    <span>27 Aug 2019</span>
                    <div className="rating">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star-half_alt" />
                    </div>
                    <h5>Brandon Kelley</h5>
                    <p>
                      Neque porro qui squam est, qui dolorem ipsum quia dolor
                      sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora. incidunt ut labore et dolore
                      magnam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="review-add">
                <h4>Add Review</h4>
                <form action="#" className="ra-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name*" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email*" />
                    </div>
                    <div className="col-lg-12">
                      <div>
                        <h5>You Rating:</h5>
                        <div className="rating">
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star-half_alt" />
                        </div>
                      </div>
                      <textarea placeholder="Your Review" />
                      <button type="submit">Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="room-booking">
                <h3>Your Reservation</h3>
                <form action="#">
                  <div className="check-date">
                    <label htmlFor="date-in">Check In:</label>
                    <input type="text" className="date-input" id="date-in" />
                    <i className="icon_calendar" />
                  </div>
                  <div className="check-date">
                    <label htmlFor="date-out">Check Out:</label>
                    <input type="text" className="date-input" id="date-out" />
                    <i className="icon_calendar" />
                  </div>
                  <div style={{ width: "100%" }} className="select-option">
                    <label htmlFor="guest">Guests:</label>
                    <select
                      style={{ width: "100%", height: "50px" }}
                      id="guest"
                    >
                      <option defaultValue={1}>1 person</option>
                      <option defaultValue={2}>2 persons</option>
                      <option defaultValue={3}>3 persons</option>
                      <option defaultValue={4}>4 persons</option>
                      <option defaultValue={5}>5 persons</option>
                      <option defaultValue={6}>6 persons</option>
                      <option defaultValue={7}>7 persons</option>
                    </select>
                  </div>
                  <button type="button">Check Availability</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
