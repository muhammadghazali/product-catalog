import React from 'react';
import ProductListService from './services/ProductListService';

const ProductDetailsPage = ({ match }) => {
  const productList = ProductListService.getList();
  const matchedProducts = productList.filter(
    product => product.id === match.params.productId
  );

  return (
    <div className="card card-product">
      <div className="card-product-img-wrapper">
        <img src={matchedProducts[0].image} alt={matchedProducts[0].name} />
      </div>

      <div className="card-section">
        <h3 className="card-product-name">{matchedProducts[0].name}</h3>
        <h5 className="card-product-price">Rp {matchedProducts[0].price}</h5>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
