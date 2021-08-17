import React from 'react';
import PropTypes from 'prop-types';
import historyProp from './history.prop';

function History({history, onClickClearHistory}) {
  return (
    <section className="main__history history">
      <h2 className="history__header">История конвертаций</h2>

      <ul className="history__list">
        { history.map((item, id) => {
          return (
            <li className="history__item" key={item.amountIn + id}>
              <p className="history__item-text history__item-date">{item.date}</p>
              <p className="history__item-text history__item-value">{item.amountIn} {item.currencyIn}</p>
              <p className="history__item-text history__item-currency">{item.amountOut} {item.currencyOut}</p>
            </li>
          )
        }) }
      </ul>

      <button className="history__button-clear" onClick={onClickClearHistory}>Очистить историю</button>
    </section>
  )
}

History.propTypes = {
  history: PropTypes.arrayOf(historyProp).isRequired,
  onClickClearHistory: PropTypes.func.isRequired,
};

export default History;
