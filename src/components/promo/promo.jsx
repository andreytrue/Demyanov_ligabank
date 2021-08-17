import React from 'react';

function Promo() {
  return (
    <section className="main__promo promo">
      <div className="promo__info">
        <h2 className="promo__header">Лига Банк</h2>
        <p className="promo__text">Кредиты на любой случай</p>
        <a className="promo__link" href="calc-credit">Рассчитать кредит</a>
      </div>
      
      <div className="promo__pics">
        <img className="promo__card-white" src="./img/white-card.png" alt="Белая карта Лига банка" />
        <img className="promo__card-black" src="./img/black-card.png" alt="Черная карта Лига банка" />
      </div>
    </section>
  )
}

export default Promo;
