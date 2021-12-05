import {createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//Reducers
import rootReducer from './reducers';
//@todo

import { getFirebase } from 'react-redux-firebase';

// Check for settings in localStorage
if (localStorage.getItem('settings') == null) {
    // Default settings
    const defaultSettings = {
      disableBalanceOnAdd: true,
      disableBalanceOnEdit: false,
      allowRegistration: false
    };
  
    // Set to localStorage
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

// Create store with reducers and initial state
const initialState = {settings: JSON.parse(localStorage.getItem('settings'))}
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
