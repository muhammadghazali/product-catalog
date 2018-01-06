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
