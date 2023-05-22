import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NewToyAdd = () => {
    const { user } = useContext(AuthContext);

  const addToyHandle = (event) => {
    event.preventDefault();

    const form = event.target;
    const picture = form.link.value;
    const toyName = form.toyName.value;
    const author = form.name.value;
    const email = form.email.value;
    const categoryName = form.categoryName.value;
    const price = parseInt(form.price.value);
    const rating = parseInt(form.rating.value);
    const quantity = parseInt(form.quantity.value);
    const message = form.message.value;

    const addNewToy = {
      picture,
      toyName,
      author,
      email,
      categoryName,
      price,
      rating,
      quantity,
      message,
    };

    // console.log(addNewToy);

    fetch('http://localhost:5000/addNewToy', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addNewToy)
    })
    .then( res => res.json())
    .then( data => {
      // console.log(data);
      if(data.insertedId){
        alert('Toy Added')
      }
    })


  };
    return (
        <div className="px-10 my-16">
      <h2 className="text-center font-bold text-3xl my-10">New Toy Add</h2>
      <form onSubmit={addToyHandle}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
          <input
            type="text"
            name="link"
            placeholder="Photo URL"
            className="file-input file-input-bordered file-input-info w-full"
          />
          <input
            type="text"
            name="toyName"
            placeholder="Toy name"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            defaultValue={user?.displayName}
            className="input input-bordered input-info w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            name="categoryName"
            placeholder="Category name"
            className="input input-bordered input-info w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered input-info w-full"
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating out of 5"
            className="input input-bordered input-info w-full"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Available quantity"
            className="input input-bordered input-info w-full"
          />
          <textarea
            className="textarea textarea-info"
            name="message"
            placeholder="Toy description"
          ></textarea>
        </div>
        <button className="btn btn-block my-10">Add A Toy</button>
      </form>
    </div>
    );
};

export default NewToyAdd;