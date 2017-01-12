import React, { Component } from 'react';
import './App.css';

import RecipeList from './components/RecipeList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe Book</h2>
        </div>
        <div className="container">
            <RecipeList />
        </div>
      </div>
    );
  }
}

export default App;
