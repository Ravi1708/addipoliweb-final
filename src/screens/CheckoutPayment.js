import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import { createOrder } from "../actions/orderActions";

const CheckoutPayment = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;
  const [paymentMethod, setPaymentMethod] = useState(" ");

  const [paymentID, setpaymentID] = useState("");
  const [orderID, setorderID] = useState("");
  const [signature, setsignature] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handlePay = async () => {
    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    axios
      .post(
        "https:/api.addipoli-puttus.com/user/online-payment",
        { totalPrice: parseFloat(cart.totalPrice) },
        config
      )
      .then((res) => {
        const receiptId = res.data.receiptId;
        var options = {
          key: "rzp_live_k1Jb6HWsUrIGni",
          amount: parseFloat(cart.totalPrice) * 100,
          currency: "INR",
          name: "Addipoli Puttus",
          image: "assets/img/Logo.png",
          order_id: res.data.razorpayOrderId,
          // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
          handler: function (response) {
            console.log(response);
            // setpaymentID(response.razorpay_payment_id);
            // setorderID(response.razorpay_order_id);
            // setsignature(response.razorpay_signature);
            console.log(paymentID);
            console.log(orderID);
            console.log(signature);

            axios
              .post(
                "https:/api.addipoli-puttus.com/user/verify-payment",
                {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  signature: response.razorpay_signature,
                },
                config
              )
              .then(() => {
                const orderItems = cart.cartItems.map((val) => {
                  return {
                    productId: val.product,
                    quantity: val.qty,
                  };
                });
                dispatch(
                  createOrder({
                    orderItems,
                    shippingAddress: cart.shippingAddress,
                    paymentMethod: paymentMethod,
                    itemsPrice: cart.itemsPrice,
                    shippingPrice: cart.shippingPrice,
                    taxPrice: cart.taxPrice,
                    totalPrice: parseFloat(cart.totalPrice),
                    payprice: cart.payprice,
                    paymentResult: "Paid",
                    deliveryStatus: "Order Placed",
                    orderStatus: "Ongoing",
                    receiptId,
                  })
                );
                localStorage.removeItem("cartItems");
              })
              .catch((err) => console.log(err));
          },
          // prefill: {
          //   name: "Name",
          //   email: "Name@example.com",
          //   contact: "9999999999",
          // },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch((err) => console.log(err));
  };

  // calculate price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(0);

  cart.taxPrice = addDecimals(Number((0.05 * cart.itemsPrice).toFixed(2)));

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  if (!shippingAddress) {
    history.push("/checkoutaddress");
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(setPaymentMethod);
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      // eslint-disable-next-line
      history.push(`/ordercompleted/${order.orderId}`);
    }
  }, [history, success]);
  const placeOrderHandler = () => {
    const orderItems = cart.cartItems.map((val) => {
      return {
        productId: val.product,
        quantity: val.qty,
      };
    });
    dispatch(
      createOrder({
        orderType: "Delivery",
        orderItems: orderItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: paymentMethod,
        basePrice: parseFloat(cart.basePrice),
        deliveryCharge: parseFloat(cart.deliveryCharge),
        tax: parseFloat(cart.taxPrice),
        couponDiscount: parseFloat(cart.couponDiscount),
        totalPrice: parseFloat(cart.totalPrice),
        payprice: cart.payprice,
        paymentResult: "Unpaid",
        deliveryStatus: "Order Placed",
        orderStatus: "Ongoing",
        receiptId: "",
        hubId: cart.shippingAddress.hubId,
      })
    );
    localStorage.removeItem("cartItems");
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
                  <h2>Checkout</h2>
                  <a href="/index">Home</a>
                  <span>Checkout</span>
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
                    <li className="done-proceed">Shop Cart</li>
                    <li className="active">Payment Method</li>
                    <li>Order Complete</li>
                  </ul>
                </div>
                <div className="row">
                  <div
                    class="col-md-7 col-sm-5 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div class="shop-checkout-right">
                      <div class="shop-checkout-box">
                        <h5>YOUR ORDER</h5>
                        <div class="shop-checkout-title">
                          <h6>
                            PRODUCT <span>TOTAL</span>
                          </h6>
                        </div>

                        <div class="shop-checkout-row">
                          {cartItems.map((item) => {
                            return (
                              <p>
                                <span>{item.name} &nbsp; </span>{" "}
                                <strong>x</strong> {item.qty}
                                <small> &#8377; {item.price * item.qty}</small>
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      <h5>ADDRESS DETAILS</h5>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <label
                            className="form-check-label-pay"
                            for="delivery"
                          >
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="cart-total wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <div className="cart-total-title">
                        <h5>CART TOTALS</h5>
                      </div>
                      <div className="product-cart-total">
                        <small>Total Amount</small>
                        <span> &#8377; {cart.basePrice}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Coupon Applied</small>
                        <span>&#8377; {cart.couponDiscount}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Delivery Charge</small>
                        <span> &#8377; {cart.deliveryCharge}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Tax</small>
                        <span>&#8377; {cart.taxPrice}</span>
                      </div>
                      <div className="grand-total">
                        <h5>
                          TOTAL <span> &#8377; {cart.totalPrice}</span>
                        </h5>
                      </div>
                      <div className="cart-total-title">
                        <h5>PAYMENT METHODS</h5>
                      </div>
                      <div class="row">
                        <div className="col-md-12">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radio"
                              value="Online payment"
                              checked={paymentMethod === "Online payment"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label
                              className="form-check-label-pay"
                              onClick={(e) =>
                                setPaymentMethod("Online payment")
                              }
                            >
                              Pay Online
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              value="Cash on delivery"
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              checked={paymentMethod === "Cash on delivery"}
                              type="radio"
                              name="radio"
                            />
                            <label
                              className="form-check-label-pay"
                              onClick={(e) =>
                                setPaymentMethod("Cash on delivery")
                              }
                            >
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                      {paymentMethod == " " ? (
                        <div className="proceed-check">
                          <button
                            onClick={placeOrderHandler}
                            className=" btn-medium"
                            disabled
                          >
                            choose payment method
                          </button>
                        </div>
                      ) : paymentMethod == "Cash on delivery" ? (
                        <div className="proceed-check">
                          <button
                            onClick={placeOrderHandler}
                            className="btn-primary-gold btn-medium"
                          >
                            Place Order
                          </button>
                        </div>
                      ) : (
                        <div className="proceed-check">
                          <a
                            onClick={handlePay}
                            className="btn-primary-gold btn-medium"
                          >
                            Proceed to Pay
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* <div class="shop-checkout-box"> */}
                  {/* <div className="cart-total-title">
                    <h5>ADDRESS DETAILS</h5>
                  </div> */}
                  {/* <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
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
                    </div>
                  </div> */}

                  {/* </div> */}
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

export default CheckoutPayment;
