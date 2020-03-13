import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Main from './main'
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';

const history = createBrowserHistory();

const initialState = window.INITIAL_REDUX_STATE;

export const store = configureStore(history, initialState);

const rootElement = document.getElementById("root");

ReactDOM.render(<Main store={store} history={history} />, rootElement);
