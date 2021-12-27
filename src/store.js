import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  listSliderReducer,
  productListReducer,
  productDetailsReducer,
  productReviewCreateReducer,
  productListByCategoryReducer,
  productListByComboReducer,
} from "./reducers/productReducers";

import { cartReducer, verifyShippingAddress } from "./reducers/cartReducers";
import {
  userAddressesByIdReducer,
  userAddressesReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userOtpReducer,
  // userLoginWithGoogleReducer,
  userRegisterReducer,
  // userRegisterWithGoogleReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
  orderListReducer,
} from "./reducers/orderReducers";

import { saveShippingAddress } from "./actions/cartActions";

//combine reducer to get all reducers
const reducer = combineReducers({
  listSlider: listSliderReducer,
  productList: productListReducer,
  productListByCategory: productListByCategoryReducer,
  productListByCombo: productListByComboReducer,
  productDetails: productDetailsReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  // userLoginWithGoogle: userLoginWithGoogleReducer,
  userOtp: userOtpReducer,
  userRegister: userRegisterReducer,
  // userRegisterWithGoogle: userRegisterWithGoogleReducer,
  userDetails: userDetailsReducer,
  userAddresses: userAddressesReducer,
  userAddressesById: userAddressesByIdReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  saveaddress: saveShippingAddress,
  verifyaddress: verifyShippingAddress,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
});

// get cart items from local storage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//get user info from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//get shipping address from local storage
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

//thunk middleware
const middleware = [thunk];

//redux store constant
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
