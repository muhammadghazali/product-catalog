import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Chance from 'chance';

import ProductDetails from './ProductDetails';

const chance = new Chance();

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      hasMoreItems: true
    };

    this.loadMoreItems = this.loadMoreItems.bind(this);
  }

  renderProductList(data) {
    return data.map(productData => {
      return (
        <ProductDetails
          key={chance.guid()}
          name={productData.name}
          image={productData.image}
          price={productData.price}
        />
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

  render() {
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
}

ProductList.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export default ProductList;
