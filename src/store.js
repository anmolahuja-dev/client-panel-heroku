import {createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//Reducers
import rootReducer from './reducers';
//@todo

import { getFirebase } from 'react-redux-firebase';

// Create store with reducers and initial state
const initialState = {}
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
