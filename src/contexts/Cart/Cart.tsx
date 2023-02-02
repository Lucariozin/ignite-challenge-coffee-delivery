import { createContext, useContext, useReducer } from 'react'

import { reducer } from './Cart.reducer'

import type { CartContextState, CartProviderProps } from './Cart.types'

const initialState: CartContextState = {
  items: [],
  dispatch: () => {},
}

const CartContext = createContext<CartContextState>(initialState)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: CartContextState = {
    ...state,
    dispatch,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

interface UseCartState extends CartContextState {
  addNewItemToTheCart: () => void
}

export const useCart = (): UseCartState => {
  const state = useContext(CartContext)

  const addNewItemToTheCart = () => {
    console.log('Adicionando novo item no carrinho')
  }

  return { ...state, addNewItemToTheCart }
}
