import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess('User registration successful');
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });

    // Validation
    setError('');
    setSuccess('');

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase.");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character");
      return;
    } else if (password.length < 6) {
      setError("Password minimum 6 character.");
      return;
    }



  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Please Register!</h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{success}</p>
          </form>
          <div className="">
            <h5 className="text-center my-5">
              Already have an Account?{" "}
              <Link className="font-bold text-red-600" to={"/login"}>
                Log in
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
