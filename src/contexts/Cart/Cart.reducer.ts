import { CartContextState, Item } from './Cart.types'

type Action =
  | 'ADD_NEW_ITEM_TO_THE_CART'
  | 'REMOVE_ITEM_FROM_THE_CART'
  | 'INCREMENT_ITEM_QUANTITY'
  | 'DECREMENT_ITEM_QUANTITY'
  | 'CLEAR_ITEMS_FROM_THE_CART'

type Payload = {
  item?: Item
  itemId?: string
}

type ActionFunctionObj = { [K in Action]: (params: { state: CartContextState; payload?: Payload }) => CartContextState } // eslint-disable-line

export interface RuducerAction {
  type: Action
  payload?: Payload
}

const actionFunctionsObj: ActionFunctionObj = {
  ADD_NEW_ITEM_TO_THE_CART: ({ state, payload }) => {
    if (!payload?.item) return state

    const { item } = payload

    const newItems = [item, ...state.items]

    return { ...state, items: newItems }
  },
  REMOVE_ITEM_FROM_THE_CART: ({ state, payload }) => {
    if (!payload?.itemId) return state

    const { itemId } = payload

    const newItems = state.items.filter((item) => item.id !== itemId)

    return { ...state, items: newItems }
  },
  INCREMENT_ITEM_QUANTITY: ({ state, payload }) => {
    if (!payload?.itemId) return state

    const { itemId } = payload

    const newItems = state.items.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))

    return { ...state, items: newItems }
  },
  DECREMENT_ITEM_QUANTITY: ({ state, payload }) => {
    if (!payload?.itemId) return state

    const { itemId } = payload

    const newItems = state.items
      .map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity ? item.quantity - 1 : 0 }
        }

        return item
      })
      .filter((item) => item.quantity !== 0)

    return { ...state, items: newItems }
  },
  CLEAR_ITEMS_FROM_THE_CART: ({ state }) => {
    return { ...state, items: [] }
  },
}

export const reducer = (state: CartContextState, action: RuducerAction) => {
  const { type, payload } = action

  const actionFunction = actionFunctionsObj[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
