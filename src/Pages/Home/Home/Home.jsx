import slide1 from "../../../assets/1.jpg";
import slide2 from "../../../assets/2.jpeg";
import slide3 from "../../../assets/3.jpg";
import slide4 from "../../../assets/4.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  return (
    <>
      <div className="bg-base-200 px-5">
        <div className="py-5 ">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={slide4} className="w-full rounded" />
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
        <div className=" w-full mx-auto bg-base-200">
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 3</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Home;
