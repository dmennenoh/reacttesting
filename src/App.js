import React from 'react';
import Customnavbar from './components/Customnavbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Customnavbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
