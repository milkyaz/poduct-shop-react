import Shop from "./components/Shop/Shop";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="main-container" style={{ display: "flex" }}>
      <Shop />
      <Sidebar />
    </div>
  );
}

export default App;
