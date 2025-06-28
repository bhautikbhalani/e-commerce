// src/context/CartContextValue.ts
import { createContext } from 'react';
import type { Product } from '../utils/types';

export interface CartContextType {
  cartItems: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export default CartContext;
