import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductListItem = props => {
  return (
    <div className="card card-product">
      <div className="card-product-img-wrapper">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="card-section">
        <h3 className="card-product-name">{props.name}</h3>
        <h5 className="card-product-price">Rp {props.price}</h5>
      </div>

      <Route path={'/product/' + props.id} component={ProductListItem} />
    </div>
  );
};

ProductListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductListItem;
