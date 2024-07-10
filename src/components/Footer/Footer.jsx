import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <Link to="/">
        <h1 className="footer-title">QPICK</h1>
      </Link>
      <div className="footer-source">
        <ul>
          <li>
            <Link>Избранное</Link>
          </li>
          <li>
            <Link to="/cart">Корзина</Link>
          </li>
          <li>
            <Link>Контакты</Link>
          </li>
        </ul>
        <div className="footer-conditions">
          <Link>Условия сервиса</Link>
          <div className="footer-lang">
            <img className="footer-lang-icon" src="lang.svg" alt="Language" />
            <button className="footer-lang-btn footer-lang-btn-active">
              Рус
            </button>
            <button className="footer-lang-btn">Eng</button>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <Link>
          <img className="footer-icon vk" src="VK.svg" alt="VK" />
        </Link>
        <Link>
          <img className="footer-icon" src="Telegram.svg" alt="Telegram" />
        </Link>
        <Link>
          <img className="footer-icon" src="WhatsApp.svg" alt="WhatsApp" />
        </Link>
      </div>
    </div>
  );
}
