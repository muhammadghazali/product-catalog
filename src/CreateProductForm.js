import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

class CreateProductForm extends Component {
  constructor(props) {
    super(props);

    this.setState = { database: this.props.firebaseService.database() };
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleChange(e) {
    console.log('handleChange', e);
  }

  handleColorChange(color) {
    console.log('color', color);
  }

  render() {
    return (
      <div>
        <form>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="medium-6 cell">
                <h1>Add Product</h1>
                <div className="grid-x grid-padding-x">
                  <div className="medium-12 cell">
                    <label>
                      Name
                      <input
                        type="text"
                        placeholder="Product name"
                        name="product-name"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>

                  <div className="medium-12 cell">
                    <label>
                      Description
                      <textarea
                        placeholder="Description of the product"
                        name="product-desc"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>

                  <div className="medium-12 cell">
                    <label>
                      Color
                      <CirclePicker onChangeComplete={this.handleColorChange} />
                      <br />
                    </label>
                  </div>

                  <div className="medium-12 cell">
                    <label>
                      Price
                      <input
                        type="number"
                        placeholder="Price of the product"
                        name="product-price"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>

                  <div className="medium-12 cell">
                    <fieldset className="fieldset">
                      <legend>Size</legend>
                      <input
                        id="S"
                        type="checkbox"
                        name="product-size"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="S">S</label>

                      <input
                        id="M"
                        type="checkbox"
                        name="product-size"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="M">M</label>

                      <input
                        id="M"
                        type="checkbox"
                        name="product-size"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="L">L</label>

                      <input
                        id="XL"
                        type="checkbox"
                        name="product-size"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="XL">XL</label>
                    </fieldset>
                  </div>

                  <div className="medium-12 cell">
                    <input
                      type="submit"
                      className="button"
                      value="Save"
                      title="Save to catalog"
                    />
                  </div>
                </div>
              </div>

              <div className="medium-6 cell">x</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProductForm;
