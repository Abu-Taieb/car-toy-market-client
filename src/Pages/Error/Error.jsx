import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full mx-auto text-center my-5">
            <Link><button className="btn my-5">Back to Home</button></Link>
            <img className="mx-auto rounded-xl" src={"https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=740&t=st=1684430265~exp=1684430865~hmac=cf9df253b45a22aaa5539093ea8eddb8da133673fb3024538beed0786ac1ad56"} alt="" />
        </div>
    );
};

export default Error;