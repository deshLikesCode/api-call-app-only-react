import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logo from './logo.svg';
import './App.css';
import PostListContainer from './components/PostListContainer';
import Posts from './components/Posts';
import PostForm from './components/Postform';



class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostListContainer />
        </div>
    );
  }
}

export default App;
