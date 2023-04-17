import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchGetHotelServices,
  fetchGetProductsByService,
} from "../../store/hotelServiceSlice/hotelServiceSlice";
import room1 from "../../assets/img/room/room-1.jpg";
import "./services.scss";
import Swal from "sweetalert2";

const Services = ({ serviceCallBack }) => {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await dispatch(fetchGetHotelServices())
        .then(unwrapResult)
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult.data.items);
          setServices(originalPromiseResult.data.items);
          // console.log(services);
          // handle result here
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
          // handle result here
        });
    })();
  }, []);

  return (
    <>
      {services &&
        services.map((service) => (
          <div className="booking-servies">
            <div className="booking-servies__left">
              <img src={service.thumbnail} />
            </div>
            <div className="booking-servies__right">
              <h4>{service.title}</h4>
              <p>
                {service.description.length <= 130
                  ? service.description
                  : service.description.slice(0, 126).concat("...")}
              </p>
              {service &&
                service?.price?.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              <div>
                <button
                  class="btn btn-link p-0"
                  onClick={(e) => {
                    serviceCallBack(service);
                  }}
                >
                  Add service
                </button>
                <a
                  onClick={async () => {
                    const result = await dispatch(
                      fetchGetProductsByService(service.id)
                    )
                      .then(unwrapResult)
                      .then((originalPromiseResult) => {
                        Swal.fire({
                          title: "Danh sách sản phẩm",
                          html: `
                            <ul>
                              <li style="display: flex; margin-bottom: 12px;">
                                <img style="width: 40%" src=${"https://res.cloudinary.com/ds18kbgr2/image/upload/v1681750227/hcs8nwyejqtbputrnzis.jpg"}>
                                <h3 style="margin-left: 12px">Cafe</h3>
                              </li>
                              <li style="display: flex; margin-bottom: 12px;">
                                <img style="width: 40%" src=${"https://file.hstatic.net/1000135323/file/tra_sua_ngon_0e87236e4d7442fb826c502798ec6f7e_1024x1024.jpg"}>
                                <h3 style="margin-left: 12px">Trà sữa</h3>
                              </li>
                              <li style="display: flex; margin-bottom: 12px;">
                                <img style="width: 40%" src=${"https://product.hstatic.net/200000140863/product/68.tra_dao_57af0e82545d44e0b421fe6e0051e4b5_1024x1024.png"}>
                                <h3 style="margin-left: 12px">Trà đào</h3>
                            </li>
                            </ul>
                          `,
                          showClass: {
                            popup: "animate__animated animate__fadeInDown",
                          },
                          hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                          },
                        });
                        if (originalPromiseResult.status == "SUCCESS") {
                          console.log(originalPromiseResult);
                          let products = originalPromiseResult.data.items;
                        } else {
                        }

                        // console.log(services);
                        // handle result here
                      })
                      .catch((rejectedValueOrSerializedError) => {
                        console.log(rejectedValueOrSerializedError);
                        // handle result here
                      });
                  }}
                  style={{ marginLeft: "12px" }}
                >
                  Chi tiết dịch vụ
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Services;
