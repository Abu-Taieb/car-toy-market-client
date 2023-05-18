const Blogs = () => {
  return (
    <div className="bg-base-200 px-5">
      <h2 className="text-3xl text-center">Our Blog Pages</h2>
      <div className="">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <div className="">
              <ol>
                <li className="list-decimal">Access Token:</li>
                <p>An access token is a credential that is used to access protected resources. It contains information about the user or application that requested the token and the permissions granted to it.</p>
                <p>An access token is a credential that is used to access protected resources. It contains information about the user or application that requested the token and the permissions granted to it.</p>
                <p>An access token is a credential that is used to access protected resources. It contains information about the user or application that requested the token and the permissions granted to it.</p>
              </ol>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
