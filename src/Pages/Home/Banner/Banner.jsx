import slide4 from "../../../assets/category/c6.jpg";

const Banner = () => {
  return (
    <div className="flex bg-white rounded-xl px-5 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/2 text-center">
          <h1 className="text-5xl font-bold leading-snug sm:text-6xl">Welcome to our <br /> <span className="text-[#FF0126]">Car Toy Market!</span></h1>
          <p className="py-10 text-justify">
          The car toy market is a thriving industry encompassing a wide range of miniature vehicles and playsets, catering to the imaginative play and enjoyment of children and collectors alike.
          </p>
          <button className="btn bg-[#FF0126] border-0">Get Started</button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={slide4} className="w-full rounded" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
