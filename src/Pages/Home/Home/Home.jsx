import "react-tabs/style/react-tabs.css";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <>
      <div className="bg-base-200 px-5">
        <Banner></Banner>
        <Gallery></Gallery>
        <Category></Category>
      </div>
    </>
  );
};

export default Home;
