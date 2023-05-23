// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CategoryCard = ({ catagory }) => {
  const { user } = useContext(AuthContext);

  const details = () => {
    if (!user) {
      alert("You have to log in first to view details");
    }
  };

  const { _id, toy_name, picture_url, price, rating } = catagory;
  console.log(catagory);

  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl py-10 px-5">
        <figure>
          <img src={picture_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {toy_name}</h2>
          <h2 className="card-title">Price: {price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button onClick={details} className="btn btn-primary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Comment  
      <div className="">
         <Tabs>
               <TabList>
                 <Tab>{toy_name}</Tab>
               </TabList>
               <TabPanel>
                 <div className="flex gap-10 justify-between">
                   <div className="card w-96 bg-base-100 shadow-xl">
                     <figure className="px-10 pt-10">
                       <img
                         src={picture_url}
                         alt="Shoes"
                         className="rounded-xl"
                       />
                     </figure>
                     <div className="card-body items-center text-center">
                       <h2 className="card-title">
                         {toy_name}
                       </h2>
                       <h2 className="card-title">
                         {price}
                       </h2>
                       <h2 className="card-title">
                         {rating}
                       </h2>
                       <div className="card-actions">
                         <button className="btn btn-primary">Buy Now</button>
                       </div>
                     </div>
                   </div>
                 </div>
               </TabPanel>
             </Tabs>
      </div>*/}
    </>
  );
};

export default CategoryCard;
