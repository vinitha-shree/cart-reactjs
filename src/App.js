import React from 'react';
import Container from './components/container';
import Cart from './components/cart';
import Header from './components/header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class App extends React.Component  {

  render(){
    return (
      <div>
        <Router>
          <div>
        <Route exact path="/" component={Header} />
        <Route path="/cart" component={Cart} />
        </div>
      </Router>
      {/* <Header /> */}
      </div>
    );
    
  }
}


