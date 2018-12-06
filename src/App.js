import React, { Component } from 'react';
import { Switch, Link, Route } from "react-router-dom";
import './App.css';
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

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
              <Link to="/">home</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route path="/" exact component = {(<h1>home page</h1>)}/>
          <Route path="/about" exact component = {AboutPage}/>
          <Route path="/users" exact component = {(<h1>users page</h1>)}/>
          <Route path="/news" exact component = {(<h1>news page</h1>)}/>
          <Route component = {NotFoundPage}/>
        </Switch>
    </div>
    )
  }
}

export default App;
