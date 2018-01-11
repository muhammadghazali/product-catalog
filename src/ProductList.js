import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Chance from 'chance';
import ProductDetailsPage from './ProductDetailsPage';
import CreateProductForm from './CreateProductForm';

import ProductListItem from './ProductListItem';

const chance = new Chance();

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
          <Switch>
            <Route
              exact
              path="/"
              render={() => this.renderInfiniteScrollSection()}
            />
            <Route
              exact
              path="/products/add"
              component={() => (
                <CreateProductForm
                  firebaseService={this.props.firebaseService}
                />
              )}
            />
            <Route path="/products/:productId" component={ProductDetailsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ProductList.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export default ProductList;
