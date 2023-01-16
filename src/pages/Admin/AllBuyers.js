import React, { useEffect, useState } from "react";

const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch(
      "https://laptop-mart-server-kamrul-hasan-antor.vercel.app/users/buyers"
    )
      .then((res) => res.json())
      .then((data) => {
        const buyer = data.reduce((finalArr, current) => {
          let obj = finalArr.find((item) => item.email === current.email);

          if (obj) {
            return finalArr;
          }
          return finalArr.concat([current]);
        }, []);

        setBuyers(buyer);
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
          {buyers.map((buyer) => {
            const { _id, photoURL, fullName, email, phoneNumber, isVerified } =
              buyer;
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
                  <button className="btn btn-danger">Delete User</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
