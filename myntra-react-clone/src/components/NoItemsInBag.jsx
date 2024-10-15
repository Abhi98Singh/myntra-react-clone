import { Link } from "react-router-dom";
import { EMPTY_BAG_IMG_URL } from "../utils/constants";

const NoItemsInBag = () => {
  return (
    <div>
      <div>
        <div className="emptyBagImgDiv">
          <img src={EMPTY_BAG_IMG_URL} alt="no img" />
        </div>
        <div className="emptyBagTitle">
          There is nothing in your Bag, Let&apos;s add some Items
        </div>
        <div className="empthyBagHomeBtnDiv">
          <Link to="/">
            <button className="empthyBagHomeBtn ">Go To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoItemsInBag;
