import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
