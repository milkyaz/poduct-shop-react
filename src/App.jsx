import Shop from "./components/Shop/Shop";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [goods, setGoods] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://fakestoreapi.in/api/products?limit=20"
    );
    const data = await response.json();
    setGoods(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container" style={{ display: "flex" }}>
      <div className="filter-panel">
        <div className="filter-panel__text">
          <h3 className="filter-panel__text-title">Категории товаров</h3>
          <h3 className="filter-panel__text-right">Настройки</h3>
        </div>
        <hr />
      </div>
      <Shop goods={goods} />
      <Sidebar />
    </div>
  );
}

export default App;
