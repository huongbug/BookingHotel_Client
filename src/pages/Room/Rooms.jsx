import Title from "../../components/Title";
import Header from "../../components/Header";

import flag from "../../assets/img/flag.jpg";
import room1 from "../../assets/img/room/room-1.jpg";
import room2 from "../../assets/img/room/room-2.jpg";
import room3 from "../../assets/img/room/room-3.jpg";
import room4 from "../../assets/img/room/room-4.jpg";
import room5 from "../../assets/img/room/room-5.jpg";
import room6 from "../../assets/img/room/room-6.jpg";
import { useDispatch } from "react-redux";
import {
  fetchGetRooms,
  fetchGetAvailableRooms,
} from "../../store/roomSlice/roomSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await dispatch(fetchGetAvailableRooms())
        .then(unwrapResult)
        .then((originalPromiseResult) => {
          setRooms(originalPromiseResult.data.items);
          console.log(originalPromiseResult.data.items);
          console.log(rooms);
          // handle result here
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
          // handle result here
        });
    })();

    // return () => {}; // no-op
  }, []);

  return (
    <div>
      <Header />
      {Title("Our Rooms", "Rooms")}
      {/* Breadcrumb Section End */}
      {/* Rooms Section Begin */}
      <section className="rooms-section spad">
        <div className="container">
          <div className="row">
            {rooms &&
              rooms.map((room) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="room-item">
                      <img src={room6} alt="" />
                      <div className="ri-text">
                        <h4>{room.title}</h4>
                        <h3>
                          {room.price}$<span>/Pernight</span>
                        </h3>
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
                          </tbody>
                        </table>
                        <Link
                          className="primary-btn"
                          to={"/room-detail/" + room.id}
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/* <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src={room2} alt="" />
                <div className="ri-text">
                  <h4>Deluxe Room</h4>
                  <h3>
                    159$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 5</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src={room3} alt="" />
                <div className="ri-text">
                  <h4>Double Room</h4>
                  <h3>
                    159$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 2</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src={room4} alt="" />
                <div className="ri-text">
                  <h4>Luxury Room</h4>
                  <h3>
                    159$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 1</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src={room5} alt="" />
                <div className="ri-text">
                  <h4>Room With View</h4>
                  <h3>
                    159$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 1</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="room-item">
                <img src={room6} alt="" />
                <div className="ri-text">
                  <h4>Small View</h4>
                  <h3>
                    159$<span>/Pernight</span>
                  </h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="r-o">Size:</td>
                        <td>30 ft</td>
                      </tr>
                      <tr>
                        <td className="r-o">Capacity:</td>
                        <td>Max persion 2</td>
                      </tr>
                      <tr>
                        <td className="r-o">Bed:</td>
                        <td>King Beds</td>
                      </tr>
                      <tr>
                        <td className="r-o">Services:</td>
                        <td>Wifi, Television, Bathroom,...</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="primary-btn">
                    More Details
                  </a>
                </div>
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="room-pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">
                  Next <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rooms Section End */}
    </div>
  );
};

export default Rooms;
