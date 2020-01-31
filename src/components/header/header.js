import React from 'react'
import Language from './language'
import './header.css'

const Header = () => {
    return (
      <div className="header d-flex">
        <h3>
          <a href="#">
            Отель Таш-Кумыр
          </a>
        </h3>
        
        <ul className="menu d-flex">
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Бронирование</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        
        <Language />

      </div>
    );
  };

  export default Header;