import logo from "../../assets/car-toy-market.png";
import { FaFacebook, FaLinkedin, FaTwitch, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer px-5 py-10  bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">+8801700-000000</a>
          <a className="link link-hover">cartoy@contact.com</a>
          <a className="link link-hover">carmarket@con.com</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">Road #9,House #3</a>
          <a className="link link-hover">Baridhara J-Block</a>
          <a className="link link-hover">Dhaka</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social Media</span>
          <div className="flex gap-3">
            <a className="link link-hover text-2xl">
              {" "}
              <FaFacebook />
            </a>
            <a className="link link-hover text-2xl">
              {" "}
              <FaTwitch />
            </a>
            <a className="link link-hover text-2xl">
              {" "}
              <FaLinkedin />
            </a>
            <a className="link link-hover text-2xl">
              {" "}
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-base-200 text-center pb-5">
        <p className="">&copy; 2023 Car toy market. All right reserved.</p>
      </div>
    </>
  );
};

export default Footer;
