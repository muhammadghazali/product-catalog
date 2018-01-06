import React from 'react';

const ProductList = props => {
  return (
    <div className="product-list">
      <div className="card card-product">
        <div className="card-product-img-wrapper">
          <img
            src="https://placeimg.com/640/480/people"
            alt="Cosiena Brukat Peplum Mini Dress"
          />
        </div>

        <div className="card-section">
          <h3 className="card-product-name">
            Cosiena Brukat Peplum Mini Dress
          </h3>
          <h5 className="card-product-price">Rp 150,000</h5>
        </div>
      </div>

      <div className="card card-product">
        <div className="card-product-img-wrapper">
          <img
            src="https://placeimg.com/640/480/people"
            alt="Cosiena Brukat Peplum Mini Dress"
          />
        </div>

        <div className="card-section">
          <h3 className="card-product-name">
            Cosiena Brukat Peplum Mini Dress
          </h3>
          <h5 className="card-product-price">Rp 150,000</h5>
        </div>
      </div>

      <div className="card card-product">
        <div className="card-product-img-wrapper">
          <img
            src="https://placeimg.com/640/480/people"
            alt="Cosiena Brukat Peplum Mini Dress"
          />
        </div>

        <div className="card-section">
          <h3 className="card-product-name">
            Cosiena Brukat Peplum Mini Dress
          </h3>
          <h5 className="card-product-price">Rp 150,000</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
