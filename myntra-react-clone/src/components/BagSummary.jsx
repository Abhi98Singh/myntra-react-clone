import { useSelector } from "react-redux";
import { CONVENIENCE_FEES } from "../utils/constants";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bag);

  const itemss = useSelector((store) => store.items);

  const finalItems = itemss.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button
          className="btn-place-order"
          onClick={() => console.log("Order is Placed")}
        >
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
};

export default BagSummary;
