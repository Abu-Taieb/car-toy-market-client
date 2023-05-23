import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Category = () => {
  const [catagories, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://car-toy-market-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <div className=" py-10">
        <div className="pb-10">
          <h2 className="text-center font-bold text-3xl my-10">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {catagories.map((catagory) => (
            <CategoryCard key={catagory._id} catagory={catagory}></CategoryCard>
          ))}
          </div>

        {/* <div className="">
          <Tabs>
            <TabList>
              <Tab>{catagories[0]?.category}</Tab>
              <Tab>{catagories[1]?.category}</Tab>
              <Tab>{catagories[2]?.category}</Tab>
            </TabList>
            <TabPanel>
              <div className="flex gap-10 justify-between">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[0]?.sub_categories[0]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[0]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[0]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[0]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[0]?.sub_categories[1]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[1]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[1]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[1]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[0]?.sub_categories[2]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[2]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[2]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[0]?.sub_categories[2]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-10 justify-between">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[1]?.sub_categories[0]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[0]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[0]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[0]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[1]?.sub_categories[1]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[1]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[1]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[1]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[1]?.sub_categories[2]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[2]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[2]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[1]?.sub_categories[2]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-10 justify-between">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[2]?.sub_categories[0]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[0]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[0]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[0]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[2]?.sub_categories[1]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[1]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[1]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[1]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={catagories[2]?.sub_categories[2]?.picture_url}
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[2]?.name}
                    </h2>
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[2]?.price}
                    </h2>
                    <h2 className="card-title">
                      {catagories[2]?.sub_categories[2]?.rating}
                    </h2>
                    <div className="card-actions">
                      <button className="btn bg-[#FF0126] border-0">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div> */}
      </div>
    </>
  );
};

export default Category;
