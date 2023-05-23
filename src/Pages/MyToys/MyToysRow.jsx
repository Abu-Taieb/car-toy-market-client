const MyToysRow = ({ addNewToy, handleDelete, handleUpdate }) => {
  const {
    _id,
    picture,
    toyName,
    author,
    email,
    categoryName,
    price,
    rating,
    quantity,
    message,
    status,
  } = addNewToy;

  console.log(_id);

  return (
    <tbody>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle bg-[#FF0126] border-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="w-25 h-25 rounded border p-2">
              {picture && (
                <img
                  src={picture}
                  alt="Avatar Tailwind CSS Component"
                  className="box-border w-24"
                />
              )}
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
          {author}
          <br />
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>{categoryName}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>{message}</td>
        <th>
          <>
            <label
              className="btn bg-[#FF0126] border-0 btn-md"
              htmlFor="my-modal-6"
            >
              Edit
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box relative">
              <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg text-center mb-5">
                  Update Your Toys Information
                </h3>
                <hr className="mb-5 border border-success" />
                <div className="grid grid-cols-1 gap-5">
                  <div className="grid grid-cols-1">
                    <span className="label-text">Toy Price</span>
                    <input
                      type="number"
                      defaultValue={price}
                      placeholder="Type here"
                      className="input input-bordered input-info w-full "
                    />
                  </div>

                  <div className="grid grid-cols-1">
                    <span className="label-text">Available Quantity</span>
                    <input
                      type="number"
                      defaultValue={quantity}
                      placeholder="Type here"
                      className="input input-bordered input-info w-full "
                    />
                  </div>

                  <div className="grid grid-cols-1">
                    <span className="label-text">Toy Description</span>
                    <input
                      type="text"
                      defaultValue={message}
                      placeholder="Type here"
                      className="input input-bordered input-info w-full "
                    />
                  </div>
                </div>
                <div className="modal-action">
                  {status === "confirm" ? (
                    <span className="text-success">Data Updated</span>
                  ) : (
                    <label
                      onClick={() => handleUpdate(_id)}
                      htmlFor="my-modal-6"
                      className="btn btn-success"
                    >
                      Update
                    </label>
                  )}
                </div>
              </div>
            </div>
          </>
        </th>
      </tr>
      <hr />
    </tbody>
  );
};

export default MyToysRow;
