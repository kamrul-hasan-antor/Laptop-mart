import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ show, handleClose, modalData }) => {
  const { user } = useContext(AuthContext);

  const {
    productName,
    resPrice,
    sellerName,
    sellerEmail,
    location,
    phNumber,
    proImg,
    _id,
  } = modalData;

  const navigate = useNavigate();
  const handleAddOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const sellPrice = form.sellPrice.value;
    const userLocation = form.userLocation.value;
    const userNumber = form.userNumber.value;
    console.log(userName, userEmail, sellPrice, userLocation, userNumber);
    const order = {
      productName,
      userName,
      userEmail,
      sellPrice,
      userLocation,
      userNumber,
      sellerName,
      sellerEmail,
      location,
      phNumber,
      proImg,
      productId: _id,
    };

    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/myOrders");
        form.reset();
      });
  };

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {productName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAddOrder}>
          <div className="d-flex">
            <div className="mb-3 w-50 me-2">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                User Name
              </label>
              <input
                disabled
                name="userName"
                defaultValue={user?.displayName}
                type="text"
                className="form-control"
                id="exampleInp"
              />
            </div>
            <div className="mb-3 w-50 ms-1">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                User Email
              </label>
              <input
                defaultValue={user?.email}
                disabled
                name="userEmail"
                type="text"
                className="form-control"
                id="exampleInput"
              />
            </div>{" "}
          </div>
          <div className="d-flex">
            <div className="mb-3 w-50 me-2">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                Selling Price
              </label>
              <input
                defaultValue={resPrice}
                disabled
                name="sellPrice"
                type="text"
                className="form-control"
                id="exampleInput"
              />
            </div>
            <div className="mb-3 w-50 ms-1">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                Location
              </label>
              <input
                name="userLocation"
                type="text"
                className="form-control"
                id="exampleInput"
              />
            </div>
          </div>{" "}
          <div className="mb-3 w-full">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Your Phone Number
            </label>
            <input
              name="userNumber"
              type="text"
              className="form-control"
              id="exampleInput"
            />
          </div>
          <div className="px-5 py-2">
            <button type="submit" className="btn btn-primary w-100">
              Add To Order
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
