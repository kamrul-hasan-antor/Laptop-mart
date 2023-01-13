import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bg1 from "../../img/banner (1).jpg";
import bg2 from "../../img/banner (2).jpg";
import bg3 from "../../img/banner (3).jpg";
const Banner = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 " src={bg1} alt="First slide" />
        <Carousel.Caption className="carousel_caption">
          <h1 className="header_title text-uppercase">
            Best Used Laptops In Very Good Condition
          </h1>
          <button type="button" className="btn banner_btn btn-light m-2">
            Buy Now
          </button>
          <button
            type="button"
            className="btn banner_btn btn-outline-light m-2"
          >
            Sell Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100  " src={bg2} alt="Second slide" />
        <Carousel.Caption className="carousel_caption">
          <h1 className="header_title ">
            SELL YOURLAPTOP FOR <br /> QUICK CASH
          </h1>
          <button type="button" className="btn banner_btn btn-light m-2">
            Buy Now
          </button>
          <button
            type="button"
            className="btn banner_btn btn-outline-light m-2"
          >
            Sell Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={bg3} alt="Third slide" />
        <Carousel.Caption className="carousel_caption">
          <h1 className="header_title text-uppercase">
            Buy The Best Laptop Brands For You
          </h1>
          <button type="button" className="btn banner_btn btn-light m-2">
            Buy Now
          </button>
          <button
            type="button"
            className="btn banner_btn btn-outline-light m-2"
          >
            Sell Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
