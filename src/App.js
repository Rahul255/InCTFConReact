
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Speakers from './Pages/Speakers';
import InCTF2019 from './Pages/InCTF2019';
import Schedules from './Pages/Schedules';
import Guest from './Pages/Guest';
import Promote from './Pages/Promote';
import ArjunTU from './Pages/ArjunTU';
import AbhinandS from './Pages/AbhinandS';
import Aswin from './Pages/Aswin';


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
        <Route path='/trainings'>
          <Speakers />
        </Route>
        <Route path='/inctf2019'>
          <InCTF2019 />
        </Route>
        <Route path='/schedule'>
          <Schedules />
        </Route>
        <Route path='/guest_speaker'>
          <Guest />
        </Route>
        <Route path='/promote'>
          <Promote />
        </Route>
        <Route path='/session/windows-exploitation-beginner’s-track'>
          <ArjunTU />
        </Route>
        <Route path='/session/offensive-android-application-pentesting'>
          <AbhinandS />
        </Route>
        <Route path='/session/privilege-escalation'>
          <Aswin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
