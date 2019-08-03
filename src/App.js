import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/routes/Login';
import Signup from './components/routes/Signup';
import Profile from './components/routes/Profile';
import Publication from './components/routes/Publication';

class App extends Component {
  render() {

    return (
      <div className='App'>
      <BrowserRouter>
        <Navbar title = "Navbar"/>  
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/publications" component={Publication}/>
      </BrowserRouter>
      
        <Intro />
        <Buttons />
      
      </div>
    );
  }
}
export default App;
