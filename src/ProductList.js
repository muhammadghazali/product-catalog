import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Chance from 'chance';

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
        <div className="card card-product" key={chance.guid()}>
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
