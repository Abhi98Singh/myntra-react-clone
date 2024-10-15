/* eslint-disable react/prop-types */
// import itemImg from "../../public/images/1.jpg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../store/bagSlice";
import { useState } from "react";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(removeFromBag(item.id));
  };

  // const [btnClicked, setBtnClicked] = useState(false);

  // const handleAddToBag = () => {
  //   dispatch(addToBag(item.id));
  //   setBtnClicked(!btnClicked);
  // };

  // const handleRemoveFromBag = () => {
  //   dispatch(removeFromBag(item.id));
  //   setBtnClicked(!btnClicked);
  // };

  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? (
          <button
            className="btn-remove-bag btn btn-danger"
            onClick={handleRemoveFromBag}
          >
            <IoIosRemoveCircleOutline className="bagIcons" />
            Remove from Bag
          </button>
        ) : (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBag}
          >
            <IoIosAddCircleOutline className="bagIcons" />
            Add to Bag
          </button>
        )}
        {/* {!btnClicked ? (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBag}
          >
            <IoIosAddCircleOutline className="bagIcons" />
            Add to Bag
          </button>
        ) : (
          <button
            className="btn-remove-bag btn btn-danger"
            onClick={handleRemoveFromBag}
          >
            <IoIosRemoveCircleOutline className="bagIcons" />
            Remove from Bag
          </button>
        )} */}
      </div>
    </div>
  );
};

export default HomeItem;
