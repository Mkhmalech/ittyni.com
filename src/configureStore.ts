import { History } from 'history';
import {createRootReducer, IttyniState, rootSaga} from './store'
import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension'

// 
export default function configureStore(history : History, initialState : IttyniState): Store<IttyniState>{

    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers = composeWithDevTools({})

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );
    
    sagaMiddleware.run(rootSaga);

    return store;
}