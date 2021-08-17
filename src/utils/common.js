import { MIN_CALENDAR_DATE, SYMBOLS_AFTER_COMMA, TimeValues } from "./const";

 const formatDate = (date) => date.toISOString().substring(0, 10);

const [hours, minutes, seconds, milliseconds] = Object.values(TimeValues);
 const setMinDate = () => MIN_CALENDAR_DATE * hours * minutes * seconds * milliseconds;

 const needToBeFixed = (value) => {
  if ((value - Math.floor(value)) !== 0) {
    value = value.toFixed(SYMBOLS_AFTER_COMMA);
  }

  return value;
}

 const changeDateToHistory = (date) => {
  return date.toString().split("-").reverse().join(".");
};

 const isFirefox = () => {
  return (typeof InstallTrigger !== 'undefined');
};

 const isSafari = () => {
  return /constructor/i.test(window.HTMLElement)
  || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari']
  || (typeof safari !== 'undefined' && window['safari'].pushNotification));
}

export {
  formatDate,
  setMinDate,
  needToBeFixed,
  changeDateToHistory,
  isFirefox,
  isSafari,
}
