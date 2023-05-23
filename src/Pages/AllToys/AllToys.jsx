import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AllToysRows from "./AllToysRows";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  console.log(user);

  const url = `https://car-toy-market-server.vercel.app/addNewToy`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [url]);



  return (
    <div className="bg-base-200 px-5">
      <h2 className="text-center font-bold text-3xl py-10 text-[#FF0126]">All Users Toys</h2>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Toys</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Qty</th>
              <th>Click Here</th>
            </tr>
          </thead>

          {/* row 1 */}
          {allToys.map((allToy) => (
            <AllToysRows
              key={allToy?._id}
              allToy={allToy}
            ></AllToysRows>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
