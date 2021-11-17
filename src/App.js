import './App.css';
import Header from './components/layout/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <h1>
            hello
          </h1>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
