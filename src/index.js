import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

//need redux promise
import ReduxPromise from 'redux-promise';

import routes from './routes/routes';
import reducers from './reducers';

// config stuff for POC
import progressNoteConfig from './configs/config';
progressNoteConfig.init();


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
