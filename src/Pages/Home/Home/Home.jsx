import "react-tabs/style/react-tabs.css";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CallToAction from "../CallToAction/CallToAction";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="bg-base-200 px-5">
        <Banner></Banner>
        <Gallery></Gallery>
        <Category></Category>
        <CallToAction></CallToAction>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
