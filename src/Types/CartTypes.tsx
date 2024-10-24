export type Product = {
  name: string;
  price: number;
};

export type ShopAction =
  | { type: "ADD_TO_CART"; payload: { products: Product[] } }
  | {
      type: "REMOVE_FROM_CART";
      payload: { products: Product[] };
    }
  | {
      type: "UPDATE_PRICE";
      payload: { total: number };
    };
