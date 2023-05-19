
import slide2 from "../../../assets/2.jpeg";
import slide3 from "../../../assets/3.jpg";
import slide4 from "../../../assets/4.jpg";

const Gallery = () => {
  return (
    <>
    <div className="">
        <h2 className="text-center font-bold text-3xl my-10">Our Gallery</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="p-5">
          <img src={slide2} alt="Shoes" className="rounded-xl" />
        </figure>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="p-5">
          <img src={slide3} alt="Shoes" className="rounded-xl" />
        </figure>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="p-5">
          <img src={slide4} alt="Shoes" className="rounded-xl" />
        </figure>
      </div>
    </div>
    </>
  );
};

export default Gallery;
