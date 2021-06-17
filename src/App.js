import React, { Component } from 'react';
import './assets/css/App.scss';
import {Route, Switch} from 'react-router';
import routes from "./routes.js";



class App extends Component {
    
  render() {
      return (
          <Switch>
              {
                  routes.map(
                      (route, index) => <Route key={index} {...route} />
                  )
              }
          </Switch>
      );
  }
}

export default App;
