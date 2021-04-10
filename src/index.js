import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , combineReducers,compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { searchItems, requestItems } from './store/reducers/items.reducers'

import { routerMiddleware } from 'connected-react-router'
import { connectRouter,ConnectedRouter } from 'connected-react-router'
const logger = createLogger();
//here it should be rootreducer but unitl now we have one reducer
export const history = createBrowserHistory();

const rootReducer = (history) => combineReducers({
  router:connectRouter(history),
  // searchCountries,
  // requestCountries,
  searchItems,
  requestItems
});

const store = 
  createStore(
    rootReducer(history),  
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware, 
        logger
        )
        )
        )
// Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
ReactDOM.render(
  <Provider store={store} >
   <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
