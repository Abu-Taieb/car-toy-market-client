import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [catagories, setCategory] = useState([]);

  useEffect(() => {
    fetch("car-toy.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <div className="text-center py-10">
        {catagories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
      <div className=" w-full mx-auto bg-base-200">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Category;
