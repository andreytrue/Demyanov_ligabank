import React, { useState } from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';
import Footer from '../footer/footer';

import { HISTORY_AMOUNT } from '../../utils/const';

function WelcomeScreen() {
  const [historyState, setHistoryState] = useState([]);

  const onAddToHistory = React.useCallback((record) => {
    let array = [record, ...historyState];

    if (array.length > HISTORY_AMOUNT) {
      array = array.slice(0, -1);
    }

    setHistoryState(array);
  }, [historyState]);

  const onClickClearHistory = (evt) => {
    evt.preventDefault();
    setHistoryState([]);
  }

  return (
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <Promo />

        <Converter onAddToHistory={onAddToHistory} />

        <History history={historyState} onClickClearHistory={onClickClearHistory}/>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default WelcomeScreen;