import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bagItems = useSelector((store) => store.bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="src/images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className=" search_icon">
            <IoIosSearch className="searchIcon" />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CiUser className="header_icons" />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <CiHeart className="header_icons" />
            <span className="action_name">Wishlist</span>
          </div>

          <Link to="/bag" className="linkableBag">
            <div className="action_container ">
              <BsHandbag className="header_icons" />
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bagItems.length}</span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
