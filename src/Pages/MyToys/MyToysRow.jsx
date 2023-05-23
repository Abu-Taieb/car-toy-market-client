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
                <img src={picture} alt="Avatar Tailwind CSS Component" className="box-border w-24"/>
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
          {status === "confirm" ? (
            <span className="text-success">Confirm</span>
          ) : (
            <button
              onClick={() => handleUpdate(_id)}
              className="btn btn-success btn-sm"
            >
              Update
            </button>
          )}
        </th>
      </tr>
      <hr  />
    </tbody>
  );
};

export default MyToysRow;
