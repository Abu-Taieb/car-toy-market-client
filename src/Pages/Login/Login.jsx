import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then( result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.log(error.message);
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Please Log in!</h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex items-center gap-5 justify-center">
            <h5 className="text-center font-semibold">Log in With</h5>
            <div className="flex justify-evenly my-3">
              <Link to={'/google'} className="flex gap-2 border rounded-md p-2 items-center">
                <FaGoogle />
                Google
              </Link>
            </div>
          </div>
          <div className="">
            <h5 className="text-center my-5">
              Are you new Car toy Market?{" "}
              <Link className="font-bold text-red-600" to={"/signup"}>
                Sign up
              </Link>{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
