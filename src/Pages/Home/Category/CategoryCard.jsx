import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const CategoryCard = ({ category }) => {
  const { toy_name, sub_categories } = category;

  return (
    <div className=" w-full mx-auto bg-base-200">
      <Tabs>
        <TabList>
          <Tab>{toy_name}</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[0]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[0]?.name}</h2>
                <h2 className="card-title">{sub_categories[0]?.price}</h2>
                <h2 className="card-title">{sub_categories[0]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[1]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[1]?.name}</h2>
                <h2 className="card-title">{sub_categories[1]?.price}</h2>
                <h2 className="card-title">{sub_categories[1]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[2]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[2]?.name}</h2>
                <h2 className="card-title">{sub_categories[2]?.price}</h2>
                <h2 className="card-title">{sub_categories[2]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[0]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[0]?.name}</h2>
                <h2 className="card-title">{sub_categories[0]?.price}</h2>
                <h2 className="card-title">{sub_categories[0]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[1]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[1]?.name}</h2>
                <h2 className="card-title">{sub_categories[1]?.price}</h2>
                <h2 className="card-title">{sub_categories[1]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[2]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[2]?.name}</h2>
                <h2 className="card-title">{sub_categories[2]?.price}</h2>
                <h2 className="card-title">{sub_categories[2]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[0]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[0]?.name}</h2>
                <h2 className="card-title">{sub_categories[0]?.price}</h2>
                <h2 className="card-title">{sub_categories[0]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[1]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[1]?.name}</h2>
                <h2 className="card-title">{sub_categories[1]?.price}</h2>
                <h2 className="card-title">{sub_categories[1]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={sub_categories[2]?.picture_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{sub_categories[2]?.name}</h2>
                <h2 className="card-title">{sub_categories[2]?.price}</h2>
                <h2 className="card-title">{sub_categories[2]?.rating}</h2>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryCard;
