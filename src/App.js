import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './components/layout/Dashboard';

import {Provider} from 'react-redux';
import store from './store';

import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase from './firebase.config';
import { createFirestoreInstance } from 'redux-firestore';

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
              </Switch>
            </div>
          </div>
        </Router>
    </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
