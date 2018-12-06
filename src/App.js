import React, { Component } from 'react';
import { Switch, Link, Route } from "react-router-dom";
import './App.css';
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import UsersPage from './components/UsersPage'
import HomePage from './components/HomePage'
import NewsPage from './components/NewsPage'

class App extends Component{
  render(){
    return(
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="/">home</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route path="/" exact component = {HomePage}/>
          <Route path="/about" exact component = {AboutPage}/>
          <Route path="/users" exact component = {UsersPage}/>
          <Route path="/news" exact component = {NewsPage}/>
          <Route component = {NotFoundPage}/>
        </Switch>
    </div>
    )
  }
}

export default App;
