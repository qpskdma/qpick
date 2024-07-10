import "./Main.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { headphones, tws } from "./data.js";

export default function Main() {
  const [favQuantity, favQuantityState] = useState(0);
  const [cartQuantity, cartQuantityState] = useState(0);

  function inc(el) {
    if (!sessionStorage.getItem(el)) {
      cartQuantityState(cartQuantity + 1);
      sessionStorage.setItem(el.img, JSON.stringify(el));
    }
  }
  function favInc(el) {
    if (localStorage.getItem(el.img)) {
      favQuantityState(favQuantity - 1);
      localStorage.removeItem(el.img);
    } else {
      favQuantityState(favQuantity + 1);
      localStorage.setItem(el.img, JSON.stringify(el));
    }
  }

  function CardItem(el) {
    return (
      <li className="cards__item" key={el.img}>
        <div className="card__img__wrapper">
          <img
            className="card__img"
            src={el.img}
            alt={el.img}
            onClick={() => favInc(el)}
          />
        </div>
        <div className="card__content">
          <h3 className="card__content__title">{el.title}</h3>
          <div className="card__content__price">
            {el.price + " ₽"}
            <div>
              <strike className="card__content__price-strike">
                {el.oldPrice ?? el.oldPrice}
              </strike>
            </div>
          </div>
          <div className="card__content__rating">
            <img src="rating.png" alt="rating" />
            <p>{el.rating}</p>
          </div>
          <button className="card__content__buyBtn" onClick={() => inc(el)}>
            Купить
          </button>
        </div>
      </li>
    );
  }
  return (
    <>
      <Header />
      <div className="cards__wrapper">
        <h3>Наушники</h3>
        <ul className="cards">{headphones.map((el) => CardItem(el))}</ul>
        <h3 className="cards__tws">Беспроводные наушники</h3>
        <ul className="cards">{tws.map((el) => CardItem(el))}</ul>
      </div>
    </>
  );
}
