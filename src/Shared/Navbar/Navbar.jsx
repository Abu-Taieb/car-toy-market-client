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
            <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-[#FF0126] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF0126] hover:text-white"
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
              <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
                <Link to={"alltoys"}>All Toys</Link>
              </li>
              <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
                <Link to={"mytoys"}>My Toys</Link>
              </li>
              <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
                <Link to={"newtoyadd"}>Add A Toys</Link>
              </li>
              <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
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
            <li className="font-bold">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
              <Link to={"alltoys"}>All Toys</Link>
            </li>
            {user?.email ? (
              <>
                <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
                  <Link to={"mytoys"}>My Toys</Link>
                </li>
                <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
                  <Link to={"newtoyadd"}>Add A New Toys</Link>
                </li>
              </>
            ) : (
              ""
            )}

            <li className="font-bold hover:bg-[#FF0126] hover:text-white rounded-md">
              <Link to={"blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="">
            {user ? (
              <div className="flex gap-5 items-center">
                <button className="avatar tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : user.email}>
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} alt=""/>
                  </div>
                </button>

                <button onClick={handleLogOut} className="btn btn-sm bg-[#FF0126] border-0">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="btn btn-success">Log In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
