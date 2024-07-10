import "./Cart.css";
import Products from "../cart/Products.jsx";
import Header from "../Header/Header.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const productsArr = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    productsArr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
  }
  const prArr2 = [...productsArr];
  const [products, productState] = useState(prArr2);

  let TotalCoast = 0;
  const getTotalCoast = () => {
    products.map((el) => {
      return (TotalCoast += el.price * el.count);
    });
  };
  getTotalCoast();

  const inc = (id) => {
    productState(
      products.map((el) => {
        if (el.img === id) {
          return { ...el, count: ++el.count };
        }
        return el;
      })
    );
    sessionStorage.setItem(
      id,
      JSON.stringify(
        products
          .filter((a) => a.img === id)
          .find((item) => {
            return item.img === id;
          })
      )
    );
  };

  const dec = (id) => {
    productState(
      products.map((el) => {
        if (el.img === id) {
          return { ...el, count: --el.count };
        }
        return el;
      })
    );
    sessionStorage.setItem(
      id,
      JSON.stringify(
        products
          .filter((a) => a.img === id)
          .find((item) => {
            return item.img === id;
          })
      )
    );
  };

  const deleteProduct = (id) => {
    productState(products.filter((a) => a.img !== id));
    sessionStorage.removeItem(id);
  };
  const priceFormatter = new Intl.NumberFormat();

  return (
    <>
      <Header />
      {sessionStorage.length < 1 ? (
        <p className="no-products-title">В корзине пока пусто</p>
      ) : (
        <>
          <h3 className="cart__title">Корзина</h3>
          <div className="cart__cart">
            <Products
              deleteProduct={deleteProduct}
              products={products}
              inc={inc}
              dec={dec}
            />
            <div className="order__wrapper">
              <div className="order__price">
                <p>ИТОГО</p>
                <p>₽ {priceFormatter.format(TotalCoast)}</p>
              </div>
              <div className="order__checkout">
                <Link className="order__checkout__link" href="/">
                  Перейти к оформлению
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
