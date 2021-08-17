import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router';
import '../../sass/style.scss';

import WelcomeScreen from '../welcome-screen/welcome-screen';

import NotFoundScreen from '../not-found-screen/not-found-screen';
import { createBrowserHistory } from 'history';
import { AppRoute } from '../../utils/const';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={ browserHistory }>
      <Switch>

        <Route exact path={AppRoute.MAIN}>
          <WelcomeScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
