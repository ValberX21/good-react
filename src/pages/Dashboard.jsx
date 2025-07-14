import List from "../components/ListInventory";
import FavoriteList from "../components/FavoriteList";
import Product from "../components/Products";

const Dashboard = () => {
  return (
    <div className="grid-container">
        <div className="section red"><List /></div>
        <div className="section blue"><FavoriteList /></div>
        <div className="section white"><Product /></div>
        <div className="section yellow"><Product /></div>
    </div>
  );
};

export default Dashboard;
