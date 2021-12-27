import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutScreen = ({ match, history }) => {
  const [keyword, setKeyword] = useState(match.params.keyword);
  const [coupencode, setcoupencode] = useState("");
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const [activeIndex, setactiveIndex] = useState(0);

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // calculate price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.basePrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.deliveryCharge = addDecimals(20);

  cart.taxPrice = addDecimals(Number((0.05 * cart.basePrice).toFixed(2)));

  cart.couponDiscount = 0;

  cart.totalPrice = (
    Number(cart.basePrice) +
    Number(cart.deliveryCharge) +
    Number(cart.taxPrice) -
    Number(cart.couponDiscount)
  ).toFixed(2);

  const applycoupen = () => {
    if (coupencode === "ADDIPOLIFIRST") {
      if (cart.totalPrice > 199) {
        cart.totalPrice = cart.totalPrice - 50;
      }
    }
  };

  //get product list when dispatch changes
  useEffect(() => {}, [dispatch, keyword, pageNumber]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
          <div className="main-part">
            {/*<!-- Start Breadcrumb Part -->*/}
            <section
              className="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: "url('assets/images/breadbg1.jpg')" }}
            >
              <div className="container">
                <div className="breadcrumb-inner">
                  <h2>SHOP CART</h2>
                  <a href="#">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </section>
            {/*<!-- End Breadcrumb Part -->*/}
            <section className="home-icon shop-cart bg-skeen">
              <div className="icon-default icon-skeen">
                <img src="assets/images/scroll-arrow.png" alt="image" />
              </div>
              <div className="container">
                <div
                  className="checkout-wrap checkout-wrap-more wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <ul className="checkout-bar">
                    <li className="done-proceed">Login</li>
                    <li className="done-proceed">Address</li>
                    <li className="active">Shop Cart</li>
                    <li>Payment Method</li>
                    <li>Order Complete</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="shop-cart-list wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <table className="shop-cart-table">
                        <thead>
                          <tr style={{ textAlign: "center" }}>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => {
                            return (
                              <tr style={{ textAlign: "center" }}>
                                <td>
                                  <div className="product-cart">
                                    <img
                                      src={item.image}
                                      style={{
                                        width: "80px",
                                        borderRadius: "20px",
                                      }}
                                      alt="image"
                                    />
                                  </div>
                                  <div
                                    className="product-cart-title"
                                    style={{ fontSize: "15px" }}
                                  >
                                    <span>{item.name}</span>
                                  </div>
                                </td>

                                <td>
                                  <strong style={{ color: "#04e04c" }}>
                                    {" "}
                                    &#8377; {item.price}
                                  </strong>
                                </td>
                                <th>QUANTITY</th>
                                <td>
                                  <div className="price-textbox">
                                    <span className="minus-text">
                                      <i
                                        className="icon-minus"
                                        onClick={(e) =>
                                          dispatch(
                                            addToCart(
                                              item.product,
                                              Number(item.qty - 1)
                                            )
                                          )
                                        }
                                      ></i>
                                    </span>
                                    <input
                                      name="txt"
                                      type="text"
                                      value={item.qty}
                                    ></input>
                                    <span
                                      className="plus-text"
                                      onClick={(e) =>
                                        dispatch(
                                          addToCart(
                                            item.product,
                                            Number(item.qty + 1)
                                          )
                                        )
                                      }
                                    >
                                      <i className="icon-plus"></i>
                                    </span>
                                  </div>
                                </td>
                                <th>TOTAL</th>
                                <td> &#8377; {item.price * item.qty}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="shop-cart-list wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      {/* <div class="shop-checkout-box"> */}
                      <div className="cart-total-title">
                        <h5>ADDRESS DETAILS</h5>
                      </div>
                      <label className="form-check-label-pay" for="delivery">
                        {shippingAddress.name}
                        {`(${shippingAddress.addressOptions})`} <br />
                        <small>
                          {shippingAddress.address}
                          <br />
                          {shippingAddress.area}
                          <br />
                          {shippingAddress.pincode}
                          <br />
                          {shippingAddress.landmark}
                          <br />
                          Mobile Number - {shippingAddress.phoneNumber}
                        </small>
                      </label>
                      {/* <div className="product-cart-detail">
                        <div className="cupon-part">
                          <input
                            type="text"
                            name="txt"
                            placeholder="Coupon Code"
                            value={coupencode}
                            onChange={(e) => setcoupencode(e.target.value)}
                          ></input>
                        </div>
                        <a
                          onClick={applycoupen}
                          className="btn-primary-gold btn-medium"
                        >
                          Apply Coupon
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="cart-total wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <div className="cart-total-title">
                        <h5>CART TOTALS</h5>
                      </div>
                      <div className="product-cart-total">
                        <small>Total products</small>
                        <span> &#8377; {cart.basePrice}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Coupon Applied</small>
                        <span> &#8377; 00.00</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Delivery Charge</small>
                        <span> &#8377; {cart.deliveryCharge}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Tax</small>
                        <span> &#8377; {cart.taxPrice}</span>
                      </div>
                      <div className="grand-total">
                        <h5>
                          TOTAL <span> &#8377; {cart.totalPrice}</span>
                        </h5>
                      </div>
                      <div className="proceed-check">
                        <LinkContainer to="/payment">
                          <div className="btn-primary-gold btn-medium">
                            Confirm Order
                          </div>
                        </LinkContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/*<!-- End Main -->*/}
      </div>
    </div>
  );
};

export default CheckoutScreen;
