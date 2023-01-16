import React from "react";

const LatestNews = () => {
  return (
    <div className="p-5">
      <h3 className="text-center fs-1 text-uppercase">Latest News</h3>
      <p className="text-center">
        ____________Read latest news about laptops and stay updated____________
      </p>
      <div className="container py-3">
        <div className="row ">
          <div className="col-md-4 col-12  ">
            <div className="border px-2">
              <img
                src="https://www.pcworld.com/wp-content/uploads/2023/01/DSCF2742_PCW-1.jpg?quality=50&strip=all&w=300&h=200&crop=1"
                alt=""
                className="img-fluid w-100 mt-2"
              />
              <p className="py-3 fw-semibold fs-5 mb-0">
                Watch Nvidia's RTX 40-series laptops absolutely smoke the 3080
                Ti
              </p>
              <p>
                Nvidia's new RTX-40 series gaming laptops are power efficient,
                blisteringly fast, and ridiculously thin.
              </p>
              <button className="btn btn-outline-primary my-3">
                Read More
              </button>
            </div>
          </div>
          <div className="col-md-4 col-12  ">
            <div className="border px-2">
              <img
                src="https://www.pcworld.com/wp-content/uploads/2023/01/hp-dragonfly-folio-hero.jpg?quality=50&strip=all&w=300&h=200&crop=1"
                alt=""
                className="img-fluid w-100 mt-2"
              />
              <p className="py-3 fw-semibold fs-5 mb-0">
                HP Dragonfly Folio G3 Review: A 2-in-1 for discerning business
                users
              </p>
              <p>
                The Framework Laptop Chromebook is powerful, upgradeable, and
                easy on the eyes. But is the $999 price tag really worth it?
              </p>
              <button className="btn btn-outline-primary my-3">
                Read More
              </button>
            </div>
          </div>
          <div className="col-md-4 col-12  ">
            <div className="border px-2">
              <img
                src="https://www.pcworld.com/wp-content/uploads/2022/12/Dell-G16-overview.jpg?quality=50&strip=all&w=300&h=200&crop=1"
                alt=""
                className="img-fluid w-100 mt-2"
              />
              <p className="py-3 fw-semibold fs-5 mb-0">
                Dell G16 review: Staid looks with strong midrange performance
              </p>
              <p>
                The Dell G16 laptop may not offer much in terms of looks, but
                it's one heck of a performer, especially when it comes to
                gaming.
              </p>
              <button className="btn btn-outline-primary my-3">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
