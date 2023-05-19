import slide1 from "../../../assets/1.jpg";

const Gallery = () => {
  return (
    <div className="">
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Our Gallery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
        <div className="bg-white p-5 rounded-xl">
          <img className="rounded-xl w-full" src={slide1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
