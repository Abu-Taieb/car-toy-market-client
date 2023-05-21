import { useLoaderData } from "react-router-dom";


const AddToys = () => {
    const addtoys = useLoaderData();
  const toy = addtoys;

  const {price} = toy[1];

    console.log(price);
  return (
    <div className="px-10 my-16">
      <h2 className="text-center font-bold text-3xl my-10">Add A Toys</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
          <input
            type="text"
            defaultValue={price}
            className="file-input file-input-bordered file-input-info w-full"
          />
          <input
            type="text"
            placeholder="Toy name"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-info w-full"
          />
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            placeholder="Category name"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            defaultValue={price}
            className="input input-bordered input-info w-full"
          />
          <input
            type="number"
            placeholder="Rating out of 5"
            className="input input-bordered input-info w-full"
          />
          <input
            type="number"
            placeholder="Available quantity"
            className="input input-bordered input-info w-full"
          />
          <textarea
            className="textarea textarea-info"
            placeholder="Toy description"
          ></textarea>
        </div>
        <button className="btn btn-block my-10">block</button>
      </form>
    </div>
  );
};

export default AddToys;
