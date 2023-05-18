import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full mx-auto text-center my-10">
            <Link><button className="btn my-5">Back to Home</button></Link>
            <img className="mx-auto rounded-xl" src={"https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?size=626&ext=jpg&ga=GA1.1.1107447859.1681124721&semt=ais"} alt="" />
        </div>
    );
};

export default Error;