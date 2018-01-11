import React from 'react';
import { CirclePicker } from 'react-color';

const CreateProductForm = props => {
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
                    <input type="text" placeholder="Product name" />
                  </label>
                </div>

                <div className="medium-12 cell">
                  <label>
                    Description
                    <textarea placeholder="Description of the product" />
                  </label>
                </div>

                <div className="medium-12 cell">
                  <label>
                    Color
                    <CirclePicker />
                    <br />
                  </label>
                </div>

                <div className="medium-12 cell">
                  <label>
                    Price
                    <input type="number" placeholder="Price of the product" />
                  </label>
                </div>

                <div className="medium-12 cell">
                  <fieldset className="fieldset">
                    <legend>Size</legend>
                    <input id="checkbox12" type="checkbox" />
                    <label htmlFor="checkbox12">Checkbox 1</label>
                    <input id="checkbox22" type="checkbox" />
                    <label htmlFor="checkbox22">Checkbox 2</label>
                    <input id="checkbox32" type="checkbox" />
                    <label htmlFor="checkbox32">Checkbox 3</label>
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
};

export default CreateProductForm;
