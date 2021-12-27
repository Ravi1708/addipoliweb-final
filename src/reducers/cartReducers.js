import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS_REQUEST,
  SAVE_SHIPPING_ADDRESS_SUCCESS,
  SAVE_SHIPPING_ADDRESS_FAIL,
  VERIFY_SHIPPING_ADDRESS_REQUEST,
  VERIFY_SHIPPING_ADDRESS_SUCCESS,
  VERIFY_SHIPPING_ADDRESS_FAIL,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      console.log(action.payload);
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};

export const saveShippingAddress = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_ADDRESS_REQUEST:
      return {
        loading: true,
      };
    case SAVE_SHIPPING_ADDRESS_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case SAVE_SHIPPING_ADDRESS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const verifyShippingAddress = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_SHIPPING_ADDRESS_REQUEST:
      return {
        loading: true,
      };
    case VERIFY_SHIPPING_ADDRESS_SUCCESS:
      return {
        loading: false,
        success: true,
        verifiedaddress: action.payload,
      };
    case VERIFY_SHIPPING_ADDRESS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
