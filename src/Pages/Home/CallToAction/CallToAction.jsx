const CallToAction = () => {
  return (
    <div className="">
      <h2 className="text-center font-bold text-3xl my-10 text-[#FF0126]">Call To Action</h2>
      <div className=" bg-gradient-to-r from-[#FF0126] via-purple-500 to-pink-500 p-20 rounded-xl">
        <div className="text-center flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-white">
              Your Marketing Needs to Get Stronger
            </h2>
            <h5 className="text-4xl font-semibold text-white">
              And we have the ideas ready
            </h5>
          </div>
          <div className="w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Enter you best email"
              className="input input-bordered input-info w-full border-0 my-2"
            />
            <br />
            <button className="btn text-[#FF0126] bg-white hover:bg-[#FF0126] hover:text-white w-full border-0 my-2">
              Call To Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
