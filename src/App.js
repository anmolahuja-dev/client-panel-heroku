import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth'

import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import Settings from './components/settings/Settings';
import Register from './components/auth/Register';

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
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)}></Route>
                <Route exact path="/login" component={UserIsNotAuthenticated(Login)}></Route>
                <Route exact path="/register" component={UserIsNotAuthenticated(Register)}></Route>
                <Route exact path="/clients/add" component={UserIsAuthenticated(AddClient)}></Route>
                <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)}></Route>
                <Route exact path="/settings" component={UserIsAuthenticated(Settings)}></Route>
                <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}></Route>
              </Switch>
            </div>
          </div>
        </Router>
    </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
