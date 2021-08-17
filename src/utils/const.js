 const AppRoute = {
  MAIN: '/',
  NOT_FOUND: '/not-found',
};

 const CurrenciesList = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBR: 'GBR',
  CNY: 'CNY',
};

 const CurrencySelectors = {
  SELL: 'У меня есть',
  BUY: 'Хочу приобрести',
}

 const API_ROUTE = 'https://api.exchangerate.host/';

 const AFTER_COMMA_VALUES = 2;

 const MIN_CALENDAR_DATE = 7;

 const CURRENCY_DEFAULT_VALUE = {
  SELL: 'RUB',
  BUY: 'USD',
};

 const HISTORY_AMOUNT = 10;

 const CURRENCY_INPUT = {
  SELL: 'sell-input',
  BUY: 'buy-input',
}

 const CurrencyInputOptions = {
  STEP: '0.0001',
  MIN: '0',
  MAX: '9999',
}

 const EQUAL_COEFFICIENT = 1;

 const SYMBOLS_AFTER_COMMA = 4;

 const TimeValues= {
  HOURS: 24,
  MINUTES: 60,
  SECONDS: 60,
  MILLISECONDS: 1000,
};

export {
  AppRoute,
  CurrenciesList,
  CurrencySelectors,
  API_ROUTE,
  AFTER_COMMA_VALUES,
  MIN_CALENDAR_DATE,
  CURRENCY_DEFAULT_VALUE,
  HISTORY_AMOUNT,
  CURRENCY_INPUT,
  CurrencyInputOptions,
  EQUAL_COEFFICIENT,
  SYMBOLS_AFTER_COMMA,
  TimeValues,
};
