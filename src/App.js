import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/CommonPart/Header/Header";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="inventory" element={<Inventory />}></Route>
          <Route path="notfound" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
