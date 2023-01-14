import React from "react";
import Modal from "react-bootstrap/Modal";

const BookingModal = ({ show, handleClose, modalData }) => {
  const {
    productName,
    resPrice,
    sellerName,
    sellerEmail,
    location,
    phNumber,
    proImg,
  } = modalData;
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {productName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className="mb-3 w-50 me-2">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Seller Name
            </label>
            <input
              disabled
              name="sellerName"
              defaultValue={sellerName}
              type="text"
              className="form-control"
              id="exampleInp"
            />
          </div>
          <div className="mb-3 w-50 ms-1">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Seller Email
            </label>
            <input
              defaultValue={sellerEmail}
              disabled
              name="sellerEmail"
              type="text"
              className="form-control"
              id="exampleInput"
            />
          </div>{" "}
        </div>
        <div className="d-flex">
          <div className="mb-3 w-50 ms-1">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Selling Price
            </label>
            <input
              defaultValue={resPrice}
              disabled
              name="sellerEmail"
              type="text"
              className="form-control"
              id="exampleInput"
            />
          </div>{" "}
        </div>
      </Modal.Body>
      <div className="px-5 py-2">
        <button className="btn btn-primary w-100">Add To Order</button>
      </div>
    </Modal>
  );
};

export default BookingModal;
