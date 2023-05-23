import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyAdd = () => {
  const toy = useLoaderData();
  useTitle('Bookmark')
  const {
    toy_name,
    picture_url,
    seller_name,
    seller_email,
    category,
    price,
    rating,
    available_quantity,
    description,
  } = toy;
  console.log(toy);

  const addNewToyHandle = () => {

    
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-10">
        Toy add your Bookmark
      </h2>
      <div className="px-10 my-16">
        <h2 className="text-center font-bold text-3xl my-10"></h2>
        <form onSubmit={addNewToyHandle}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            <input
              type="text"
              placeholder="Photo URL"
                defaultValue={picture_url}
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
              placeholder="Toy name"
                defaultValue={toy_name}
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
              placeholder="Your name"
                defaultValue={seller_name}
              className="input input-bordered input-info w-full"
            />
            <input
              type="email"
              placeholder="Your email"
                defaultValue={seller_email}
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
              placeholder="Category name"
                defaultValue={category}
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
                defaultValue={"$" + price}
              className="input input-bordered input-info w-full"
            />
            <input
              type="number"
                defaultValue={rating}
              placeholder="Rating out of 5"
              className="input input-bordered input-info w-full"
            />
            <input
              type="number"
                defaultValue={available_quantity}
              placeholder="Available quantity"
              className="input input-bordered input-info w-full"
            />
            <textarea
              className="textarea textarea-info"
                defaultValue={description}
              placeholder="Toy description"
            ></textarea>
          </div>
          <button className="btn btn-block my-10">Add Toy</button>
        </form>
      </div>
    </div>
  );
};

export default ToyAdd;
