import { Routes, Route, useParams, Link } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import AdminSideBar from "../../components/AdminSideBar";
import adminFilter from "../../assets/img/admin/adminFilter.png";
import admionSearchWhite from "../../assets/img/admin/admionSearchWhite.png";
import adminPlus from "../../assets/img/admin/adminPlus.png";
import excel from "../../assets/img/admin/excel.png";
import pdf from "../../assets/img/admin/pdf.png";
import printer from "../../assets/img/admin/printer.png";
import eye from "../../assets/img/admin/eye.png";
import edit from "../../assets/img/admin/edit.png";
import adminDelete from "../../assets/img/admin/adminDelete.png";
import { useDispatch } from "react-redux";
import {
  fetchDeleteRoom,
  fetchGetRooms,
} from "../../store/roomSlice/roomSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import {
  fetchDeleteHotelService,
  fetchGetHotelServices,
} from "../../store/hotelServiceSlice/hotelServiceSlice";
import {
  fetchDeleteSale,
  fetchGetSales,
} from "../../store/saleSlice/saleSlice";
import {
  fetchDeleteUser,
  fetchGetUsers,
} from "../../store/userSlice/userSlice";
import {
  fetchDeleteProduct,
  fetchGetProducts,
} from "../../store/productSlice/productSlice";
import saleInterface from "../../interfaces/sales.interface";
import roomsInterface from "../../interfaces/rooms.interface";
import usersInterface from "../../interfaces/users.interface";
import servicesInterface from "../../interfaces/service.interface.js";
import productInterface from "../../interfaces/product.interface.js";
import bookingInterface from "../../interfaces/booking.interface.js";
import Swal from "sweetalert2";
import postInterface from "../../interfaces/post.interface.js";
import {
  fetchDeletePost,
  fetchGetPosts,
} from "../../store/postSlice/postSlice";
import { fetchGetBookingsAdmin } from "../../store/bookingSlice/bookingSlice";

const UserManage = () => {
  const dispatch = useDispatch();
  const [keys, setKeys] = useState([]);
  const [data, setData] = useState([]);
  let { option, optionId } = useParams();

  useEffect(() => {
    (async () => {
      let func;
      if (option == "rooms") {
        func = fetchGetRooms();
        setKeys([...Object.keys(roomsInterface)]);
      } else if (option == "sales") {
        func = fetchGetSales();
        setKeys([...Object.keys(saleInterface)]);
      } else if (option == "users") {
        func = fetchGetUsers();
        setKeys([...Object.keys(usersInterface)]);
      } else if (option == "services") {
        func = fetchGetHotelServices();
        setKeys([...Object.keys(servicesInterface)]);
      } else if (option == "products") {
        func = fetchGetProducts();
        setKeys([...Object.keys(productInterface)]);
      } else if (option == "posts") {
        func = fetchGetPosts();
        setKeys([...Object.keys(postInterface)]);
      } else if (option == "bookings") {
        func = fetchGetBookingsAdmin();
        console.log(bookingInterface);
        setKeys([...Object.keys(bookingInterface)]);
      }
      // let func = fetchGetHotelServices();

      const result = await dispatch(func)
        .then(unwrapResult)
        .then((originalPromiseResult) => {
          const data = originalPromiseResult.data.items;
          console.log(data);
          setData(data);
        })
        .catch((rejectedValueOrSerializedError) => {
          console.log(rejectedValueOrSerializedError);
        });
    })();
  }, [option]);

  const deleteOption = async (id) => {
    let func;
    console.log(id);
    if (option == "rooms") {
      func = fetchDeleteRoom(id);
    } else if (option == "users") {
      func = fetchDeleteUser(id);
    } else if (option == "sales") {
      func = fetchDeleteSale(id);
    } else if (option == "services") {
      func = fetchDeleteHotelService(id);
    } else if (option == "products") {
      func = fetchDeleteProduct(id);
    } else if (option == "posts") {
      func = fetchDeletePost(id);
    }
    Swal.fire({
      title: "Bạn có chắc chắn xóa ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp nhận",
    }).then(async (e) => {
      if (e.isConfirmed) {
        const result = await dispatch(func)
          .then(unwrapResult)
          .then((originalPromiseResult) => {
            // if (originalPromiseResult.status == "SUCCESS") {
            //   navigate("/admin/" + option);
            // }
            console.log("delete", originalPromiseResult);
            Swal.fire("Xóa thành công", "", "success");
            setTimeout(() => {
              window.location.href = "/admin/" + option;
            }, 2000);
            // handle result here
          })
          .catch((rejectedValueOrSerializedError) => {
            console.log(rejectedValueOrSerializedError);
            Swal.fire("Có lỗi xảy ra", "", "error");
            // handle result here
          });
      }
    });
  };

  return (
    <>
      <div className="main-wrapper">
        <AdminHeader />
        <AdminSideBar />
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="page-title">
                <h4>{option.charAt(0).toUpperCase() + option.slice(1)} List</h4>
                <h6>
                  Manage your {option.charAt(0).toUpperCase() + option.slice(1)}
                </h6>
              </div>
              {option != "users" && option != "bookings" && (
                <div className="page-btn">
                  <a href={"/admin/add/" + option} className="btn btn-added">
                    <img src={adminPlus} alt="img" />
                    Add {option}
                  </a>
                </div>
              )}
            </div>
            <div className="card">
              <div className="card-body">
                <div className="table-top">
                  <div className="search-set">
                    <div className="search-path">
                      <a className="btn btn-filter" id="filter_search">
                        <img src={adminFilter} alt="img" />
                        <span></span>
                      </a>
                    </div>
                    <div className="search-input">
                      <a className="btn btn-searchset">
                        <img src={admionSearchWhite} alt="img" />
                      </a>
                      <div
                        id="DataTables_Table_0_filter"
                        className="dataTables_filter"
                      >
                        <label>
                          {" "}
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Search..."
                            aria-controls="DataTables_Table_0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="wordset">
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="pdf"
                        >
                          <img src={pdf} alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="excel"
                        >
                          <img src={excel} alt="img" />
                        </a>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="print"
                        >
                          <img src={printer} alt="img" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card" id="filter_inputs">
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col-lg-2 col-sm-6 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Customer Code"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Enter Customer Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-12">
                        <div className="form-group">
                          <input type="text" placeholder="Enter Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-12">
                        <div className="form-group">
                          <input type="text" placeholder="Enter Email" />
                        </div>
                      </div>
                      <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                        <div className="form-group">
                          <a className="btn btn-filters ms-auto">
                            <img
                              src="assets/img/icons/search-whites.svg"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table datanew">
                    <thead>
                      <tr>
                        {keys && keys.map((key) => <th>{key}</th>)}
                        {option == "bookings" && (
                          <>
                            <th>creater</th>
                            <th>roomId</th>
                          </>
                        )}
                        {option != "bookings" && <th>Settings</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, index) => (
                          <tr>
                            {keys && keys.map((key) => <td>{item[key]}</td>)}
                            {option == "bookings" && (
                              <>
                                <td>
                                  {item["createdBy"]?.firstName.concat(
                                    " " + item["createdBy"].lastName
                                  )}
                                </td>
                                <td>{item.rooms?.[0]?.id}</td>
                              </>
                            )}
                            {option != "bookings" && (
                              <td
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Link
                                  className="me-3"
                                  to={
                                    "/admin/update/" + option + "/" + item["id"]
                                  }
                                  style={{ marginRight: "8px" }}
                                ></Link>

                                <Link
                                  className="me-3"
                                  to={
                                    "/admin/update/" + option + "/" + item["id"]
                                  }
                                >
                                  <img src={edit} alt="img" />
                                </Link>
                                <a
                                  className="me-3 confirm-text"
                                  href="#"
                                  onClick={() => deleteOption(item["id"])}
                                >
                                  <img src={adminDelete} alt="img" />
                                </a>
                              </td>
                            )}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {data && data.length == 0 && (
                    <div style={{ textAlign: "center", padding: "12px" }}>
                      no {option} data
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManage;
