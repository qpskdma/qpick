import "./Header.css";
import { Link } from "react-router-dom";

export default function CartHeader() {
  const productsArr = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    productsArr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
  }
  let totalQuantity = 0;
  const gettotalQuantity = () => {
    productsArr.map((el) => {
      return (totalQuantity += el.count);
    });
  };
  gettotalQuantity();
  return (
    <header className="header__wrapper">
      <Link className="header__link" to="/">
        <h1 className="header__title header__title__cart">QPICK</h1>
      </Link>
      <div className="header__items">
        <Link className="header__item" to="#">
          <img className="header__img" src="favorites.svg" alt="favorites" />
          <p className="counter">{localStorage.length}</p>
        </Link>
        <Link className="header__item" to="/cart">
          <img className="header__img" src="cart.png" alt="cart" />
          <p className="counter">{totalQuantity}</p>
        </Link>
      </div>
    </header>
  );
}
