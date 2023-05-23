import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CategoryCard = ({ catagory }) => {
  const { user } = useContext(AuthContext);

  const details = () => {
    if (!user) {
      alert("You have to log in first to view details");
    }
  };

  const { _id, toy_name, picture_url, price, rating } = catagory;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl py-10 px-5">
        <figure>
          <img src={picture_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {toy_name}</h2>
          <h2 className="card-title">Price: {price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button onClick={details} className="btn bg-[#FF0126] border-0 ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default CategoryCard;
