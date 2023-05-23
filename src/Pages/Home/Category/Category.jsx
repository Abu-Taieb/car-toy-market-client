import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


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
          <h2 className="text-center font-bold text-3xl my-10 text-[#FF0126]">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {catagories.map((catagory) => (
            <CategoryCard key={catagory._id} catagory={catagory}></CategoryCard>
          ))}
        </div>


      </div>

    </>
  );
};

export default Category;
