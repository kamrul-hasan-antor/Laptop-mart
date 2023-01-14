import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const category = Array.from(
          data
            .reduce((map, obj) => map.set(obj.productCategory, obj), new Map())
            .values()
        );

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
              <div key={category._id} className="col-md-4 col-12">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
