import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line no-unused-vars
import { Route, Link,Switch, BrowserRouter as Router} from 'react-router-dom';
import Cards from './components/page2';
const routing= (
  <Router>
   <Switch>

   <Route path="/" exact component={App}/>
  <Route path="/page2" exact component={Cards}/>
  </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
