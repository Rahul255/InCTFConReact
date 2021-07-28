
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Goal from './Pages/Goal';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/goal'>
          <Goal />
        </Route>
      </Router>
    </div>
  );
}

export default App;
