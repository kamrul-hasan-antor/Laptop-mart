import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

// const handleShow = () => setShow(true);
const AllCategory = () => {
  const data = useLoaderData();
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setModalData(data);
  };
  return (
    <div className="container py-5">
      <div className="row">
        {data.map((dat) => {
          const {
            _id,
            details,
            location,
            orgPrice,
            phNumber,
            proImg,
            productCategory,
            productCondition,
            productName,
            purchaseYear,
            resPrice,
            sellerEmail,
            sellerName,
          } = dat;
          return (
            <div key={_id} className="col-md-4">
              <div className="shadow-sm card p-2">
                <img className="img-fluid" src={proImg} alt="" />
                <div className="card-body">
                  <div className="fw-bold card-title h5">{productName}</div>
                  <h6>
                    <span className="fw-bold">Original Price:</span> ${orgPrice}
                  </h6>
                  <h6>
                    <span className="fw-bold">Resale Price:</span> ${resPrice}
                  </h6>
                  <h6>
                    <span className="fw-bold">Product Condition:</span>{" "}
                    {productCondition}
                  </h6>
                  <h6>
                    <span className="fw-bold">Year Of Purchase:</span>{" "}
                    {purchaseYear}
                  </h6>
                  <h6>
                    <span className="fw-bold">Brand:</span> {productCategory}
                  </h6>

                  <h6>
                    <span className="fw-bold">Seller Name:</span> {sellerName}
                  </h6>
                  <h6>
                    <span className="fw-bold">Seller Email:</span> {sellerEmail}
                  </h6>
                  <h6>
                    <span className="fw-bold">Phone Number:</span> {phNumber}
                  </h6>
                  <h6>
                    <span className="fw-bold"> Location:</span> {location}
                  </h6>
                  <p>{details.slice(0, 130)}</p>
                  <button
                    onClick={() => handleShow(dat)}
                    className="btn btn-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <BookingModal
          show={show}
          handleClose={handleClose}
          modalData={modalData}
        />
      </div>
    </div>
  );
};

export default AllCategory;
