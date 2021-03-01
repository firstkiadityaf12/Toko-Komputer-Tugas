import logo from './logo.svg';
import './App.css';
import React from "react"
import { Switch, Route } from "react-router-dom"
//import pages
import Login from "./pages/Login"
import Transaction from "./pages/Transaction"
import Cart from "./pages/Cart"
import Product from "./pages/Product"

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Product}/>
        <Route path="/login" component={Login}/>
        <Route path="/transaction" component={Transaction}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    )
  }
}

