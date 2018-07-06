import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         
        </p>
        <h1>
         <Dashboard />
          <Form />
          <Header/>
          </h1>
      </div>
    );
  }
}

export default App;
