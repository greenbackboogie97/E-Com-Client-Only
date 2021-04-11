export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const inCart = state.cart.some(
        (item) => item.ProductName === action.payload.ProductName
      );
      if (inCart) {
        const checkIndex = state.cart.findIndex(
          (item) => item.ProductName === action.payload.ProductName
        );
        if (checkIndex === -1) return { cart: [...state.cart, action.payload] };
        else state.cart[checkIndex].count += 1;
        return { cart: [...state.cart] };
      } else return { cart: [...state.cart, action.payload] };

    case "CHANGE_COUNT":
      const indexChange = action.payload.index;
      state.cart[indexChange].count = parseInt(action.payload.value);
      return { cart: [...state.cart] };

    case "REMOVE":
      const indexRemove = action.payload.index;
      let newCart = [...state.cart];
      newCart.splice(indexRemove, 1);
      return { cart: newCart };
    default:
      return state;
  }
};

export default reducer;
