import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://laptop-mart-server-rho.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const category = data.reduce((finalArr, current) => {
          let obj = finalArr.find(
            (item) => item.productCategory === current.productCategory
          );

          if (obj) {
            return finalArr;
          }
          return finalArr.concat([current]);
        }, []);
        setCategories(category);
      });
  }, []);

  return (
    <div className="p-5">
      <h3 className="text-center fs-1 text-uppercase">All Brands</h3>
      <p className="text-center">
        ____________We offer best laptop brands all over the
        country.____________
      </p>
      <div className="container">
        <div className="row">
          {categories.map((category) => {
            return (
              <div key={category._id} className="col-md-4 col-12 ">
                <div className="border px-2 mt-5 pb-3">
                  <img className="img-fluid" src={category.proImg} alt="" />
                  <p className="fs-3">{category.productCategory}</p>
                  <p>{category.details.slice(0, 100)}</p>
                  <Link
                    to={`/allCategory/${category.productCategory}`}
                    className="btn btn-primary"
                  >
                    See All
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
