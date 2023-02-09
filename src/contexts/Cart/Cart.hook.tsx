import { useCallback, useContext } from 'react'

import { CartContext } from './Cart.context'

import type { Item } from './Cart.types'

export const useCart = () => {
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

  const removeItemFromTheCart = useCallback(
    (id: string) => {
      dispatch({ type: 'REMOVE_ITEM_FROM_THE_CART', payload: { itemId: id } })
    },
    [dispatch],
  )

  const incrementItemQuantity = useCallback(
    (id: string) => {
      dispatch({ type: 'INCREMENT_ITEM_QUANTITY', payload: { itemId: id } })
    },
    [dispatch],
  )

  const decrementItemQuantity = useCallback(
    (id: string) => {
      dispatch({ type: 'DECREMENT_ITEM_QUANTITY', payload: { itemId: id } })
    },
    [dispatch],
  )

  const clearItemsFromTheCart = useCallback(() => {
    dispatch({ type: 'CLEAR_ITEMS_FROM_THE_CART' })
  }, [dispatch])

  return {
    ...state,
    items,
    findItemById,
    addNewItemToTheCart,
    removeItemFromTheCart,
    incrementItemQuantity,
    decrementItemQuantity,
    clearItemsFromTheCart,
  }
}
