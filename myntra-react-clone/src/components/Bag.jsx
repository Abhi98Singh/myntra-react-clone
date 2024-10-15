import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import NoItemsInBag from "./NoItemsInBag";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const itemss = useSelector((store) => store.items);
  console.log(itemss);
  console.log(bagItems);
  const finalItems = itemss.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return bagItems.length === 0 ? (
    <NoItemsInBag />
  ) : (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((itemm) => (
              <BagItem item={itemm} key={itemm.id} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
