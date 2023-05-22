import { Link } from "react-router-dom";
// import logo from "../../assets/car-toy-market.png";
import { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="navbar bg-base-200 px-5 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"alltoys"}>All Toys</Link>
              </li>
              <li>
                <Link to={"mytoys"}>My Toys</Link>
              </li>
              <li>
                <Link to={"addtoys"}>Add A Toys</Link>
              </li>
              <li>
                <Link to={"blogs"}>Blogs</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img src="https://ibb.co/jLQ14v7" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"alltoys"}>All Toys</Link>
            </li>
            {
            user?.email ? (
              <>
                <li><Link to={"mytoys"}>My Toys</Link></li>
                <li><Link to={"newtoyadd"}>Add A New Toys</Link></li>
              </>) : ("")
            }

            <li>
              <Link to={"blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="">
            {user?.email ? (
              <button
                onClick={handleLogOut}
                className="btn tooltip tooltip-bottom "
                data-tip={user.displayName ? user.displayName : user.email}
              >
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn">Log In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
