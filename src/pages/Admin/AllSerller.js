import React, { useEffect, useState } from "react";

const AllSerller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/sellers")
      .then((res) => res.json())
      .then((data) => {
        const seller = data.reduce((finalArr, current) => {
          let obj = finalArr.find((item) => item.email === current.email);

          if (obj) {
            return finalArr;
          }
          return finalArr.concat([current]);
        }, []);

        setSellers(seller);
      });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>

            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => {
            const { _id, photoURL, fullName, email, phoneNumber, isVerified } =
              seller;
            return (
              <tr key={_id}>
                <td>
                  <img src={photoURL} alt="" className="user_logo" />
                </td>
                <td>{fullName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{!isVerified ? "Not Verified" : "Verified"}</td>
                <td>
                  <button className="btn btn-danger">Delete Seller</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllSerller;
