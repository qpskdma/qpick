import Main from "./Main.jsx";
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <></>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
