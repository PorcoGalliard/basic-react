import { createContext, ReactNode, useContext, useReducer } from "react";
import shopReducer, { initialShopState } from "../Reducers/shopReducer";
import { Product } from "../Types/CartTypes";

interface ShopContextType {
  total: number;
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(shopReducer, initialShopState);

  const addToCart = (product: Product) => {
    const updateCart = state.products.concat(product);

    updatePrice(updateCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updateCart,
      },
    });
  };

  const removeFromCart = (product: Product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updateCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updateCart,
      },
    });
  };

  const updatePrice = (products: Product[]) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value: ShopContextType = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("error kang");
  }

  return context;
};

export default useShop;
