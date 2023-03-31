import room1 from "../../assets/img/room/room-b1.jpg";
import room2 from "../../assets/img/room/room-b2.jpg";
import room3 from "../../assets/img/room/room-b3.jpg";
import room4 from "../../assets/img/room/room-b4.jpg";

const RoomIntroduction = () => {
  return (
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="hp-room-item set-bg">
                <img style={{ height: "100%" }} src={room1} />
                <div className="hr-text">
                  <h3>Double Room</h3>
                  <h2>
                    199$<span>/Pernight</span>
                  </h2>
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
            <div className="col-lg-3 col-md-6">
              <div
                className="hp-room-item set-bg"
                data-setbg="img/room/room-b2.jpg"
              >
                <img style={{ height: "100%" }} src={room2} />
                <div className="hr-text">
                  <h3>Premium King Room</h3>
                  <h2>
                    159$<span>/Pernight</span>
                  </h2>
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
            <div className="col-lg-3 col-md-6">
              <div
                className="hp-room-item set-bg"
                data-setbg="img/room/room-b3.jpg"
              >
                <img style={{ height: "100%" }} src={room3} />
                <div className="hr-text">
                  <h3>Deluxe Room</h3>
                  <h2>
                    198$<span>/Pernight</span>
                  </h2>
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
            <div className="col-lg-3 col-md-6">
              <div
                className="hp-room-item set-bg"
                data-setbg="img/room/room-b4.jpg"
              >
                <img style={{ height: "100%" }} src={room4} />
                <div className="hr-text">
                  <h3>Family Room</h3>
                  <h2>
                    299$<span>/Pernight</span>
                  </h2>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomIntroduction;
