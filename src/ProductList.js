import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Chance from 'chance';
import ProductListService from './services/ProductListService';

import ProductListItem from './ProductListItem';

const chance = new Chance();

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

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      hasMoreItems: true
    };

    this.loadMoreItems = this.loadMoreItems.bind(this);
    this.renderInfiniteScrollSection = this.renderInfiniteScrollSection.bind(
      this
    );
  }

  renderProductList(data) {
    return data.map(productData => {
      return (
        <div key={chance.guid()}>
          <Link to={'/products/' + productData.id}>
            <ProductListItem
              id={productData.id}
              name={productData.name}
              image={productData.image}
              price={productData.price}
            />
          </Link>
        </div>
      );
    });
  }

  loadMoreItems() {
    this.setState({
      products: this.state.products.concat(this.props.onLoadMore())
    });
  }

  loaderElement() {
    return <div className="loader">Loading ...</div>;
  }

  renderInfiniteScrollSection() {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMoreItems}
        hasMore={this.state.hasMoreItems}
        loader={this.loaderElement()}
        initialLoad={true}
      >
        <div className="product-list">
          {this.renderProductList(this.state.products)}
        </div>
      </InfiniteScroll>
    );
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => this.renderInfiniteScrollSection()}
          />
          <Route path="/products/:productId" component={ProductDetailsPage} />
        </div>
      </Router>
    );
  }
}

ProductList.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export default ProductList;
