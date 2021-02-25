import logo from './logo.svg';
import './App.css';
import React from "react"
//import react router dom
import {Switch, Route} from "react-router-dom"
//importp pages
import Login from  "./pages/Login"
import Customer from "./pages/Customer"
import Produk from "./pages/Product"
import Transaction from "./pages/Transaction"
import Home from "./pages/Home"
import Admin from "./pages/Admin"

class App extends React.Component{
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Produk} />
        <Route path="/customer" component={Customer} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/admin" component={Admin} />
      </Switch>    
    );
  }
}

export default App;