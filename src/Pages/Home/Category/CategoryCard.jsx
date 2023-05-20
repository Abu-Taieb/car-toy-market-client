// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Link } from "react-router-dom";

const CategoryCard = ({ catagory }) => {
  const {_id, toy_name, picture_url, price, rating } = catagory;

  console.log(catagory);

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={picture_url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toy_name}</h2>
          <h2 className="card-title">{price}</h2>
          <h2 className="card-title">{rating}</h2>
          <div className="card-actions">
            <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>

{/* Comment  */}
      <div className="">
        {/* <Tabs>
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
             </Tabs> */}
      </div>
    </>
  );
};

export default CategoryCard;
