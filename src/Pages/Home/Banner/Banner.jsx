import slide1 from "../../../assets/1.jpg";
import slide2 from "../../../assets/2.jpg";
import slide3 from "../../../assets/3.jpg";
import slide4 from "../../../assets/4.jpg";

const Banner = () => {
  return (
    <div className="py-5 ">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide4} className="w-full rounded" />
          <div className="absolute h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-gradient-to-l from-black rounded-xl">
            <div className="text-center ">
              <h2 className="text-5xl font-bold text-white">
                Welcome to Our Car Toy Master
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide3} className="w-full rounded" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide1} className="w-full rounded" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide2} className="w-full rounded" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
