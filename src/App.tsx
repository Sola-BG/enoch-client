import * as React from 'react';
// import { Route } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import Header  from './components/Header/Header';
import Invoice  from './components/Invoice/Invoice';
import NotFound  from './components/NotFound/NotFound';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    /* tslint:disable */ 
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
        </header>
        <Route basename={process.env.PUBLIC_URL} exact={true} path="/" component={Invoice} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/invoice" component={Invoice} />
      </div>
    );
  }
}

export default App;
