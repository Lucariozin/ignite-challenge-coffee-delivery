import { createContext, useReducer } from 'react'

import { reducer } from './Cart.reducer'

import type { CartContextState, CartProviderProps } from './Cart.types'

const initialState: CartContextState = {
  items: [],
  dispatch: () => {},
}

export const CartContext = createContext<CartContextState>(initialState)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: CartContextState = {
    ...state,
    dispatch,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
