import React from 'react';

import ProductListService from './services/ProductListService';

const renderProductList = data => {
  return data.map(productData => {
    return (
      <div className="card card-product">
        <div className="card-product-img-wrapper">
          <img src={productData.image} alt={productData.name} />
        </div>

        <div className="card-section">
          <h3 className="card-product-name">{productData.name}</h3>
          <h5 className="card-product-price">Rp {productData.price}</h5>
        </div>
      </div>
    );
  });
};

const ProductList = props => {
  return (
    <div className="product-list">
      {renderProductList(ProductListService.getList())}
    </div>
  );
};

export default ProductList;
