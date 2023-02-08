import { createContext, ReactNode, useContext, useReducer, Dispatch, useCallback } from 'react'

export type AddressInformation = {
  cep: string
  street: string
  houseNumber: number
  neighborhood: string
  addressComplement?: string
  city: string
  fu: string
  paymentMethod: 'credit-card' | 'debit-card' | 'cash'
}

type Action = 'SET_ADDRESS_INFORMATION'

type Payload = {
  newAddressInformation?: AddressInformation
}

interface ReducerAction {
  type: Action
  payload?: Payload
}

interface OrderContextState {
  addressInformation: AddressInformation | null
  dispatch: Dispatch<ReducerAction>
}

const initialState: OrderContextState = {
  addressInformation: null,
  dispatch: () => {},
}

const OrderContext = createContext<OrderContextState>(initialState)

type ActionFunctionObj = { [K in Action]: (params: { state: OrderContextState; payload?: Payload }) => OrderContextState } // eslint-disable-line

const actionFunctionsObj: ActionFunctionObj = {
  SET_ADDRESS_INFORMATION: ({ state, payload }) => {
    if (!payload?.newAddressInformation) return state

    const { newAddressInformation } = payload

    return { ...state, addressInformation: newAddressInformation }
  },
}

const reducer = (state: OrderContextState, action: ReducerAction) => {
  const { type, payload } = action

  const actionFunction = actionFunctionsObj[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}

interface OrderProviderProps {
  children: ReactNode
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value: OrderContextState = {
    ...state,
    dispatch,
  }

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export const useOrder = () => {
  const { dispatch, ...state } = useContext(OrderContext)

  const setAddressInformation = useCallback(
    (newAddressInformation: AddressInformation) => {
      dispatch({ type: 'SET_ADDRESS_INFORMATION', payload: { newAddressInformation } })
    },
    [dispatch],
  )

  return { ...state, setAddressInformation }
}
