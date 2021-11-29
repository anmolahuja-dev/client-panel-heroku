import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
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
    
  );
}

export default App;
