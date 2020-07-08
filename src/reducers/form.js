import store from '../store';

export default function (state, action) {
  const { price, oldPrice } = store;
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        price: state.price + price,
        oldPrice: state.oldPrice + oldPrice,
        amount: state.amount + 1,
      };
    case 'DECREMENT':
      if (state.amount === 1) return state;
      return {
        ...state,
        price: state.price - price,
        oldPrice: state.oldPrice - oldPrice,
        amount: state.amount - 1,
      };
    case 'CHANGE_AMOUNT':
      if (payload < 1) return state;
      return {
        ...state,
        amount: payload,
        price: price * payload,
        oldPrice: oldPrice * payload,
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        selectedColor: payload,
      };
    case 'CHANGE_FORM_STAGE':
      return {
        ...state,
        formStage: payload,
      };
    case 'CHANGE_LOCAL_DATA': {
      const { selector, value } = payload;
      return {
        ...state,
        [selector]: value,
      };
    }
    default:
      return state;
  }
}
