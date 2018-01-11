import React from 'react';
import ProductListService from './services/ProductListService';

const ProductDetailsPage = ({ match }) => {
  const productList = ProductListService.getList();
  const matchedProducts = productList.filter(
    product => product.id === match.params.productId
  );

  const renderProductSize = sizeList => {
    const list = sizeList.map(sizeItem => <li>{sizeItem} </li>);

    return <ul>{list}</ul>;
  };

  return (
    <div className="card card-product">
      <div className="card-product-img-wrapper">
        <img src={matchedProducts[0].image} alt={matchedProducts[0].name} />
      </div>

      <div className="card-section">
        <h3 className="card-product-name">{matchedProducts[0].name}</h3>
        <p className="card-product-price">Rp {matchedProducts[0].price}</p>
        <h5>Size</h5>
        <p>{renderProductSize(matchedProducts[0].size)}</p>
        <h5>Description</h5>
        <p className="card-product-price">
          Rp {matchedProducts[0].description}
        </p>
        <h5>Materials</h5>
        <p className="card-product-materials">{matchedProducts[0].materials}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
