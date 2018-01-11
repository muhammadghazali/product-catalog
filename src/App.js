import React from 'react';
import './App.css';
import ProductListService from './services/ProductListService';
import ProductList from './ProductList';

const App = props => {
  return (
    <div className="grid-container app-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <ProductList
            onLoadMore={ProductListService.getList}
            firebaseService={props.firebaseService}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
