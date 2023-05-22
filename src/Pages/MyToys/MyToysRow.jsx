const MyToysRow = ({ addNewToy, handleDelete }) => {
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
  } = addNewToy;

  console.log(_id);

  return (
    <tbody>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle"
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
            <div className="avatar">
              <div className="w-25 h-24 rounded">
                {picture && (
                  <img src={picture} alt="Avatar Tailwind CSS Component" />
                )}
              </div>
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
          <button className="btn btn-primary btn-sm">Update</button>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToysRow;
