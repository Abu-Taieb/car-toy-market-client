import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [addNewToys, setAddNewToys] = useState([]);
  useTitle('My Toys')

  console.log(addNewToys);

  const url = `https://car-toy-market-server.vercel.app/addNewToy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddNewToys(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://car-toy-market-server.vercel.app/addNewToy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Successful");
            const remaining = addNewToys.filter(
              (addNewToys) => addNewToys._id !== id
            );
            setAddNewToys(remaining);
          }
        });
    }
  };

  // Update
  const handleUpdate = (id) => {
    fetch(`https://car-toy-market-server.vercel.app/addNewToy/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //Update Toy
          const remaining = addNewToys.filter(
            (addNewToy) => addNewToy._id !== id
          );
          const updated = addNewToys.find((addNewToy) => addNewToy._id === id);
          updated.status = "confirm";
          const newToy = [updated, ...remaining];
          setAddNewToys(newToy);
        }
      });
  };

  return (
    <div className="bg-base-200 px-5">
      <h2 className="text-center font-bold text-3xl py-10 text-[#FF0126]">My Won Toys</h2>
      <div className="overflow-x-auto w-full rounded-xl">
        <table className="table w-full rounded-xl">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Toys</th>
              <th>Seller Name & Email</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Qty</th>
              <th>Details</th>
              <th>Edit</th>
            </tr>
          </thead>

          {/* row 1 */}
          {addNewToys.map((addNewToy) => (
            <MyToysRow
              key={addNewToy?._id}
              addNewToy={addNewToy}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></MyToysRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
