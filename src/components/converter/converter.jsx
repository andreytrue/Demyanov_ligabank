import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { CurrenciesList, API_ROUTE, CURRENCY_DEFAULT_VALUE, CurrencyInputOptions, EQUAL_COEFFICIENT } from '../../utils/const';
import { formatDate, setMinDate, needToBeFixed, changeDateToHistory, isFirefox, isSafari } from '../../utils/common'; 

function Converter({onAddToHistory}) {
  const currencies = Object.values(CurrenciesList);
  const currencyOptions = Array(currencies.length).fill('');
  const dateValue = new Date();
  const minDate = new Date(dateValue.getTime() - setMinDate());
  const browserIsNotChrome = isFirefox() || isSafari();

  const getCurrencyValues = async (date, baseCurrency) => {
    return await axios.get(`${API_ROUTE}${date}?base=${baseCurrency}`)
      .then(({data}) => setCurrencyData(data));
  };
  
  const [currencyData, setCurrencyData] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [buyAmount, setBuyAmount] = useState('');

  const sellRefCurrency = useRef(null);
  const buyRefCurrency = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    getCurrencyValues(dateRef.current.value, sellRefCurrency.current.value);
  }, [dateRef]);

  const compareCoefficent = (sellValue, buyValue) => {
    if (sellValue !== buyValue) {
      return currencyData.rates[buyValue];
    }

    return EQUAL_COEFFICIENT;
  }

  const resetInputs = () => {
    setSellAmount('');
    setBuyAmount('');
  };

  const handleChangeSellHandler = (evt) => {
    evt.preventDefault();
    const coefficient = compareCoefficent(sellRefCurrency.current.value, buyRefCurrency.current.value);

    let buyCurrency = needToBeFixed(evt.target.value * coefficient);

    setSellAmount(evt.target.value);
    setBuyAmount(buyCurrency);
  }

  const handleChangeBuyHandler = (evt) => {
    evt.preventDefault();

    const coefficient = compareCoefficent(sellRefCurrency.current.value, buyRefCurrency.current.value);

    let sellCurrency = needToBeFixed(evt.target.value / coefficient);

    setSellAmount(sellCurrency);
    setBuyAmount(evt.target.value);
  }

  const handleChangeCurrency = (evt) => {
    evt.preventDefault();
    getCurrencyValues(dateRef.current.value, sellRefCurrency.current.value);
    resetInputs();
  }

  const handleChangeCalendar = (evt) => {
    evt.preventDefault();
    getCurrencyValues(dateRef.current.value, sellRefCurrency.current.value);
    resetInputs();
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const record = {
      date: changeDateToHistory(dateRef.current.value),
      amountIn: sellAmount,
      currencyIn: sellRefCurrency.current.value,
      amountOut: buyAmount,
      currencyOut: buyRefCurrency.current.value,
    };

    onAddToHistory(record);
  }

  return (
    <section className="main__converter converter">
      <h2 className="converter__header">Конвертер валют</h2>

      <form className="converter__form form" onSubmit={handleFormSubmit}>
        <div className="form__item">
            <h3 className="form__item-header">У меня есть</h3>

            <label className="form__item-label" htmlFor="sell-value"></label>
            <input
              type='number'
              className="form__item-input"
              id="sell-value"
              value={sellAmount}
              onChange={handleChangeSellHandler}
              step={CurrencyInputOptions.STEP}
              min={CurrencyInputOptions.MIN}
              max={CurrencyInputOptions.MAX}
              required
            />

            <fieldset className="form__currency">
              <label className="form__currency-label" htmlFor="sell"></label>
              <select 
                ref={sellRefCurrency} 
                className="form__currency-selector" 
                id="sell" 
                defaultValue={CURRENCY_DEFAULT_VALUE.SELL} 
                onChange={handleChangeCurrency}
              >
                {currencyOptions.map((item, id) => {
                  return (
                    <option 
                      value={currencies[id]}
                      key={currencies[id] + item}
                    >
                      {currencies[id]}
                    </option>
                  )
                })}
              </select>
            </fieldset>
          </div>
          
          <div className="form__item">
            <h3 className="form__item-header">Хочу приобрести</h3>

            <label className="form__item-label" htmlFor="buy-value"></label>
            <input 
              type='number'
              className="form__item-input"
              id="buy-value"
              value={buyAmount}
              onChange={handleChangeBuyHandler}
              step={CurrencyInputOptions.STEP}
              min={CurrencyInputOptions.MIN}
              max={CurrencyInputOptions.MAX}
              required/>

            <fieldset className="form__currency">
              <label className="form__currency-label" htmlFor="buy"></label>
              <select 
                ref={buyRefCurrency} 
                className="form__currency-selector" 
                id="buy" 
                defaultValue={CURRENCY_DEFAULT_VALUE.BUY}>

                {currencyOptions.map((item, id) => {
                  return (
                    <option 
                      value={currencies[id]}
                      key={currencies[id] + item}
                    >
                      {currencies[id]}
                    </option>
                  )
                })}

              </select>
            </fieldset>
          </div>

        <div className={`form__item-wrapper ${browserIsNotChrome ? `form__item-calendar--not-chrome`: ''}`}>
          <label className="form__item-label" htmlFor="date"></label>
          <input 
            ref={dateRef}
            className="form__item-input form__item-calendar"
            defaultValue={formatDate(dateValue)}
            min={formatDate(minDate)}
            max={formatDate(dateValue)}
            type="date"
            id="date"
            onChange={handleChangeCalendar}
            required
          />
        </div>

        <button className="form__submit" type="submit">Сохранить результат</button>
      </form>
    </section>
  )
}

Converter.propTypes = {
  onAddToHistory: PropTypes.func.isRequired,
};

export default Converter;
