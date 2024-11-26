import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((itm) => (
          <HomeItem item={itm} key={itm.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
