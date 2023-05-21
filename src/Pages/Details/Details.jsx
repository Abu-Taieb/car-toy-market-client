import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const {
    toy_name,
    picture_url,
    seller_name,
    seller_email,
    price,
    rating,
    available_quantity,
    description,
  } = details;
  console.log(details);
  return (
    <>
      <div className="card lg:card-side bg-base-200 shadow-xl m-10 rounded-xl p-10">
        <div className=" w-1/2">
          <figure>
            <img className="rounded-xl" src={picture_url} alt="Album" />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <h4 className="card-title">Toy Name : {toy_name}</h4>
          <h4 className="card-title">Seller Name : {seller_name}</h4>
          <h4 className="card-title">Seller Email : {seller_email}</h4>
          <h4 className="card-title">Product Price : {price}</h4>
          <h4 className="card-title">Product Rating : {rating}</h4>
          <h4 className="card-title">Available Stock : {available_quantity}</h4>
          <p>Description of this Product : {description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
