import React, { Component, Fragment } from "react";

import Navbar from "../component/Navbar";
import img from "../assets/1.png";

import "./style.css";

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="m-5">
          <div className="row" style={{ marginTop: "6%" }}>
            <div className="col-lg-8">
              <div className="cartContainer">
                <div>
                  <b>Available Offers</b>
                </div>
                <li>
                  <span>
                    10% Instant Discount with ICICI Bank Credit and Debit Cards
                    on a min spend of Rs 3,000. TCA
                  </span>
                </li>
                <li>
                  <span>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </span>
                </li>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 text-left">
                  <b>My Shopping Cart (1 Bag)</b>
                </div>
                <div className="col-lg-6 text-right">
                  <b>Total : ₹ 650</b>
                </div>
              </div>
              <div className="cartContainer mt-3">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={img} alt="image" style={{ width: "12rem" }} />
                  </div>
                  <div className="col-lg-6">
                    <div>
                      Amazon - Fire TV Stick with Alexa Voice Remote - Black
                      Sold by: Bhairavnath Impex (M Direct)
                    </div>

                    <div className="mt-3 row">
                      <div className="ml-3">
                        <select name="size">
                          <option value="">Size</option>
                          <option value="">S</option>
                          <option value="">M</option>
                          <option value="">L</option>
                          <option value="">XL</option>
                        </select>
                      </div>
                      <div className="ml-3">
                        <select name="qty">
                          <option value="">Qty</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1">₹ 650</div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <button type="button" class="btn btn-light">
                      REMOVE
                    </button>
                  </div>
                  <div className="col-lg-4">
                    <button type="button" class="btn btn-light">
                      MOVE TO WISHLIST
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-left">
              <div>COUPONS</div>
              <hr />
              <div>
                <b>PRICE DETAILS (1 Item)</b>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <div>Total MRP</div>
                </div>
                <div className="col-lg-6">₹ 1,599</div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-6">
                  <div>Discount on MRP</div>
                </div>
                <div className="col-lg-6"> -₹ 1,072</div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-6">
                  <div>Platform handling fee</div>
                </div>
                <div className="col-lg-6"> ₹ 99</div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col-lg-6">
                  <div>
                    <b>Total Amount</b>
                  </div>
                </div>
                <div className="col-lg-6">
                  <b>₹ 626</b>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-success mt-3"
                onClick={() => this.props.history.push("/checkout")}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
