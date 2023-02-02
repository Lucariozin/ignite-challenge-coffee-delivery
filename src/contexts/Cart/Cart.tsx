import { createContext, useCallback, useContext, useReducer } from 'react'

import { reducer } from './Cart.reducer'

import type { CartContextState, CartProviderProps, Item } from './Cart.types'

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

interface UseCartState extends Omit<CartContextState, 'dispatch'> {
  findItemById: (id: string) => Item | undefined
  addNewItemToTheCart: (item: Item) => void
  incrementItemQuantity: (id: string) => void
}

export const useCart = (): UseCartState => {
  const { dispatch, items, ...state } = useContext(CartContext)

  const findItemById = useCallback(
    (id: string) => {
      const item = items.find((item) => item.id === id)

      return item
    },
    [items],
  )

  const addNewItemToTheCart = useCallback(
    (item: Item) => {
      dispatch({ type: 'ADD_NEW_ITEM_TO_THE_CART', payload: { item: { ...item, quantity: 1 } } })
    },
    [dispatch],
  )

  const incrementItemQuantity = useCallback(
    (id: string) => {
      dispatch({ type: 'INCREMENT_ITEM_QUANTITY', payload: { itemId: id } })
    },
    [dispatch],
  )

  return { ...state, items, findItemById, addNewItemToTheCart, incrementItemQuantity }
}
