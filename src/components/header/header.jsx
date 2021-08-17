import React from 'react';

function Header() {
  return (
    <header className="page__header header">
      <img className="header__logo" src="../img/logo.png" alt="Логотип Лига Банк" width="149" height="25" />

      <ul className="header__list">
        <li className="header__list-item">
          <a className="header__list-link" href="/services">Услуги</a>
        </li>
        <li className="header__list-item">
          <a className="header__list-link" href="/calc-credit">Рассчитать кредит</a>
        </li>
        <li className="header__list-item">
          <a className="header__list-link header__list-link--checked" href="/converter">Конвертер валют</a>
        </li>
        <li className="header__list-item">
          <a className="header__list-link" href="/contacts">Контакты</a>
        </li>
        <li className="header__list-item">
          <a className="header__list-link" href="/questions">Задать вопрос</a>
        </li>
      </ul>

      <div className="header__authorization">
        <a className="header__authorization-link" href="/login">Войти в Интернет-банк</a>
      </div>
    </header>
  )
}

export default Header;