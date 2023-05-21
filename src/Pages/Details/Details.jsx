import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const {
    _id,
    toy_name,
    picture_url,
    seller_name,
    seller_email,
    price,
    rating,
    available_quantity,
    description,
  } = details;

  return (
    <>
      <div className=" bg-base-200 px-10">
      <h2 className="text-center font-bold text-3xl py-10">Details Information</h2>
        <div className="card lg:card-side bg-white shadow-xl rounded-xl p-10">
          <div className="mt-12 w-1/2">
            <figure>
              <img className="rounded-xl" src={picture_url} alt="Album" />
            </figure>
          </div>
          <div className="card-body w-1/2">
            <h4 className="font-bold text-2xl">Details of this Toy</h4>
            <h4 className="font-bold">Toy Name : {toy_name}</h4>
            <h4 className="font-bold">Seller Name : {seller_name}</h4>
            <h4 className="font-bold">Seller Email : {seller_email}</h4>
            <h4 className="font-bold">Product Price : {price}</h4>
            <h4 className="font-bold">Product Rating : {rating}</h4>
            <h4 className="font-bold">
              Available Stock : {available_quantity}
            </h4>
            <p><span className="font-bold">Description of this Product :</span> {description}</p>
            <div className="card-actions justify-end mt-10">
            <Link to={`/add/${_id}`}>
              <button className="btn btn-primary">Add Toy</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
