import { useEffect, useState } from "react";
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
      {/*     
      <div className="text-center py-10">
        {catagories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div> */}

      <div className="text-center py-10">
      <div className="pb-10">
        <h2 className="text-center font-bold text-3xl my-10">Shop by Category</h2>
    </div>
        {
          catagories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard> )
        }

      </div>
    </>
  );
};

export default Category;
