const AllToysRows = ({ allToy }) => {
  console.log(allToy._id);
  const { _id, picture, toyName, categoryName, price, rating, quantity } =
    allToy;

  console.log(_id);

  return (
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="w-25 h-25 rounded border p-2">
              {picture && (
                <img src={picture} alt="Avatar Tailwind CSS Component" className="box-border w-24" />
              )}
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
            </div>
          </div>
        </td>
        <td>{categoryName}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <th>
          <button className="btn btn-primary btn-sm bg-[#FF0126] border-0">View Details</button>
        </th>
      </tr>
      <hr className="border" />
    </tbody>
  );
};
export default AllToysRows;
