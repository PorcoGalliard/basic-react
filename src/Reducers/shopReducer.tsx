import { Product } from "../Types/CartTypes";
import { ShopAction } from "../Types/CartTypes";

type CartState = {
  total: number;
  products: Product[];
};

export const initialShopState: CartState = {
  total: 0,
  products: [],
};

const shopReducer = (state: CartState, action: ShopAction) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      console.log("ADDED TO CART");
      
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVED FROM CART");
      
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No such case for type ${type}`);
  }
};

export default shopReducer;
