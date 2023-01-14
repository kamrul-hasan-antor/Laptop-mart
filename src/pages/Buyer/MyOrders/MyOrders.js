import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  // https://laptop-mart-server-rho.vercel.app/orders?email=antor123@gmail.com
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://laptop-mart-server-rho.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  return (
    <div className="my-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Seller Name</th>
            <th scope="col">Seler Email</th>
            <th scope="col">Seller Location</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((oder) => {
            return (
              <tr key={oder._id}>
                <td>{oder.productName}</td>
                <td>{oder.sellerName}</td>
                <td>{oder.sellerEmail}</td>
                <td>{oder.location}</td>
                <td>{oder.sellPrice}</td>
                <td>
                  <button className="btn btn-primary">Pay</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
