// Import de react-app
import React from 'react';

// Import react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import des pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;