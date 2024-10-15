import { useEffect } from "react";
import HomeItem from "./HomeItem";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "../store/itemsSlice";
import ShimmerHome from "./ShimmerHome";

const Home = () => {
  const dispatch = useDispatch();

  //subscribing to the store, to use the store data
  const itemss = useSelector((store) => store.items);
  console.log(itemss);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:8080/items");
    const json = await data.json();
    console.log(json.items[0]);
    dispatch(addInitialItems(json.items[0]));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return itemss.length === 0 ? (
    <ShimmerHome />
  ) : (
    <>
      <main>
        <div className="items-container">
          {itemss.map((cardItem) => (
            <HomeItem key={cardItem.id} item={cardItem} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
