import { CartContextState, Item } from './Cart.types'

type Action = 'ADD_NEW_ITEM_TO_THE_CART'

type Payload = {
  item?: Item
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
}

export const reducer = (state: CartContextState, action: RuducerAction) => {
  const { type, payload } = action

  const actionFunction = actionFunctionsObj[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
