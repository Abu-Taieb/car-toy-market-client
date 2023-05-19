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
      <div className="text-center py-10">
        {catagories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </>
  );
};

export default Category;
