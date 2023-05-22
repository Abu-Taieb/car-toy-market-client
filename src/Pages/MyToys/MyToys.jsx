import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [addNewToys, setAddNewToys] = useState([]);

  console.log(addNewToys);

  const url = `http://localhost:5000/addNewToy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddNewToys(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/addNewToy/${id}`, {
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

  return (
    <div className="bg-base-200 px-5">
      <h2 className="text-center font-bold text-3xl py-10">My Won Toys</h2>
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
            ></MyToysRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToys;
