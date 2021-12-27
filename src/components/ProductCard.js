import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

function ProductCard(props) {
  const [cartbutton, setcartbutton] = useState("button");
  const [qty, setqty] = useState(0);

  return (
    <div>
      <div className="shop-main-list">
        <div
          className="shop-product"
          style={{
            backgroundImage: `url(${props.product.image})`,
          }}
        >
          {props.product.vegOrNonVeg == "Vegeterian" ? (
            <img
              src="/assets/images/veg.png"
              style={{
                width: "20px",
                float: "left",
                margin: "6px",
                borderRadius: "0",
              }}
            />
          ) : (
            <img
              src="/assets/images/nonveg.png"
              style={{
                width: "20px",
                float: "left",
                margin: "6px",
                borderRadius: "0",
              }}
            />
          )}
        </div>
        <a>
          <h5>{props.product.name}</h5>
        </a>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 shop-dish">
            <h5>
              <strong>&#8377; {props.product.price}</strong>
            </h5>
          </div>
          {props.product.availability == "Available" ? (
            <>
              {cartbutton === "button" && (
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                  <a
                    type="button"
                    onClick={() => {
                      props.handleCart(props.product._id, 1);
                      setcartbutton("count");
                      setqty(1);
                    }}
                    className="shop-cart-btn"
                  >
                    Add to Cart
                  </a>
                </div>
              )}{" "}
              {cartbutton === "count" && (
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
                  <button
                    id="sub"
                    className="cart-count"
                    onClick={(e) => {
                      setqty(Number(qty - 1));
                      props.handleCart(props.product._id, qty - 1);
                      if (qty === 1) {
                        setcartbutton("button");
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    className="count-nom"
                    type="text"
                    id="qtyBox"
                    readonly=""
                    value={qty}
                  />
                  <button
                    id="add"
                    className="cart-count"
                    onClick={(e) => {
                      setqty(qty + 1);
                      props.handleCart(props.product._id, qty + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
              <a type="button" className="shop-cart-btn-soon">
                Coming Soon
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// cartItems
//   .filter((filteritem) => filteritem._id == props.product._id)
//   .map((item) => {
// <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 shop-dish">
//   <button
//     id="sub"
//     className="cart-count"
//     onClick={(e) =>
//       dispatch(addToCart(item.product, Number(item.qty - 1)))
//     }
//   >
//     -
//   </button>
//   <input
//     className="count-nom"
//     type="text"
//     id="qtyBox"
//     readonly=""
//     value={item.qty}
//   />
//   <button
//     id="add"
//     className="cart-count"
//     onClick={(e) =>
//       dispatch(addToCart(item.product, Number(item.qty + 1)))
//     }
//   >
//     +
//   </button>
// </div>;
//   })}
