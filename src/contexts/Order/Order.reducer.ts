import type { AddressInformation, OrderContextState } from './Order.types'

type Action = 'SET_ADDRESS_INFORMATION'

type Payload = {
  newAddressInformation?: Partial<AddressInformation>
}

export interface ReducerAction {
  type: Action
  payload?: Payload
}

type ActionFunctionObj = { [K in Action]: (params: { state: OrderContextState; payload?: Payload }) => OrderContextState } // eslint-disable-line

const actionFunctionsObj: ActionFunctionObj = {
  SET_ADDRESS_INFORMATION: ({ state, payload }) => {
    if (!payload?.newAddressInformation) return state

    const { newAddressInformation } = payload

    const addressInformation = { ...state.addressInformation, ...newAddressInformation }

    const newState = { ...state, addressInformation } as OrderContextState

    return newState
  },
}

export const reducer = (state: OrderContextState, action: ReducerAction) => {
  const { type, payload } = action

  const actionFunction = actionFunctionsObj[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
