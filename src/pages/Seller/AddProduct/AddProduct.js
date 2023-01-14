import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const productName = form.productName.value;
    const productCategory = form.productCategory.value;
    const productCondition = form.productCondition.value;
    const purchaseYear = form.purchaseYear.value;
    const location = form.location.value;
    const proImg = form.proImg.value;
    const orgPrice = form.orgPrice.value;
    const resPrice = form.resPrice.value;
    const phNumber = form.phNumber.value;
    const details = form.details.value;

    const product = {
      sellerName,
      sellerEmail,
      productName,
      productCategory,
      productCondition,
      purchaseYear,
      location,
      proImg,
      orgPrice,
      resPrice,
      phNumber,
      details,
    };

    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div className="container mx-auto">
      <div className="row mt-3">
        <form
          onSubmit={handleAddService}
          className="col-md-6 mx-auto border p-3"
        >
          <div className="d-flex">
            <div className="mb-3 w-50 me-2">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                Seller Name
              </label>
              <input
                disabled
                name="sellerName"
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
                Seller Email
              </label>
              <input
                defaultValue={user?.email}
                disabled
                name="sellerEmail"
                type="text"
                className="form-control"
                id="exampleInput"
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputFullName"
              className="form-label fw-semibold"
            >
              Product Name
            </label>
            <input
              name="productName"
              type="text"
              className="form-control"
              id="exampleInputFullName"
            />
          </div>

          <div className="d-flex">
            <div className="mb-3 w-50 me-2">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Product Catrgory
              </label>
              <select
                name="productCategory"
                className="form-select form-select-sm "
                aria-label=".form-select-sm example"
              >
                <option defaultValue value="Apple">
                  Apple
                </option>
                <option value="Asus">Asus</option>
                <option value="Dell">Dell</option>
              </select>
            </div>
            <div className="mb-3 w-50 ms-1">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Product Condition
              </label>
              <select
                name="productCondition"
                className="form-select form-select-sm "
                aria-label=".form-select-sm example"
              >
                <option defaultValue value="Excellent">
                  Excellent
                </option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
          </div>

          <div className="d-flex">
            <div className="mb-3 w-50 me-2">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Purchase Year
              </label>
              <input
                name="purchaseYear"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 w-50 ms-1">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-semibold"
              >
                Seller Location
              </label>
              <select
                name="location"
                className="form-select form-select-sm "
                aria-label=".form-select-sm example"
              >
                <option defaultValue value="Dhaka">
                  Dhaka
                </option>
                <option value="Mymensing">Mymensing</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Product Image
            </label>
            <input
              name="proImg"
              type="text"
              className="form-control"
              id="exampleInp"
            />
          </div>
          <div className="d-flex">
            <div className="mb-3 me-2 w-50">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                Original Price
              </label>
              <input
                name="orgPrice"
                type="text"
                className="form-control"
                id="exampleInputImg"
              />
            </div>
            <div className="mb-3 w-50 ms-1">
              <label
                htmlFor="exampleInputImg"
                className="form-label fw-semibold"
              >
                Resale Price
              </label>
              <input
                name="resPrice"
                type="text"
                className="form-control"
                id="exampleInputImg"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              name="phNumber"
              type="text"
              className="form-control"
              id="exampleInp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-semibold"
            >
              Service Details
            </label>
            <textarea
              name="details"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            onClick={handleShow}
            type="submit"
            className="btn btn-primary w-50 mx-auto d-block"
          >
            Add Product
          </button>
        </form>
      </div>
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successfully Added</Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default AddProduct;
