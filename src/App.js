import React, { Component } from 'react';
import './App.css';
import ProductListService from './services/ProductListService';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <ProductList onLoadMore={ProductListService.getList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
