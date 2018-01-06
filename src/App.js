import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <div className="product-list">
              <div className="card card-product">
                <div className="card-product-img-wrapper">
                  <a href="#">
                    <img src="https://placeimg.com/640/480/people" />
                  </a>
                </div>

                <div className="card-section">
                  <a href="#">
                    <h3 className="card-product-name">
                      Kickin with Kraken Tee
                    </h3>
                  </a>
                  <h5 className="card-product-price">$19.99</h5>
                  <p className="card-product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin posuere sem enim, accumsan convallis risus semper.
                  </p>

                  <button type="button" className="success button">
                    Quick Look
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
