import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navigation } from "./Components/Navigation";
import { OrderSummary } from "./Components/OrderSummary";
import { Product } from "./Components/Product";
import { Oldproduct } from "./Components/Oldproduct";
import { Newproduct } from "./Components/Newproduct";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/order_summary" element={<OrderSummary />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<Newproduct />}/>
          <Route path="old-product" element={<Oldproduct />} />
          <Route path="new-product" element={<Newproduct />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
        <Route path="users" element={<Users />}>
          <Route path="user-details/:userId" element={<UserDetails />}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
