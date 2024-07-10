export default function Products(props) {
  const priceFormatter = new Intl.NumberFormat();
  const totalElPrice = (el) => {
    return el.price * el.count;
  };
  const GetProducts = (el) => {
    return (
      <div className="cart__wrapper" key={el.img}>
        <div>
          <img className="cart__img" src={el.img} alt={el.img} />
          <div className="cart__counter__wrapper">
            <button
              className="cart__counter__btn"
              onClick={() => props.dec(el.img)}
            >
              <img src="-.svg" alt="" />
            </button>
            <p className="cart__counter">{el.count}</p>
            <button
              className="cart__counter__btn"
              onClick={() => props.inc(el.img)}
            >
              <img src="+.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="cart__product-title">
          {el.title}
          <p className="cart__price">{priceFormatter.format(el.price)} ₽</p>
        </div>
        <div>
          <img
            className="cart__deleteIcon"
            src="delete-icon.svg"
            alt="delete"
            onClick={() => props.deleteProduct(el.img)}
          />
          <p className="cart__totalCost">
            {priceFormatter.format(totalElPrice(el))} ₽
          </p>
        </div>
      </div>
    );
  };
  return <>{props.products.map((el) => GetProducts(el))}</>;
}
