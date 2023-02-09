import { createContext, useContext, useReducer, useCallback } from 'react'

import { reducer } from './Order.reducer'

import type { AddressInformation, OrderContextState, OrderProviderProps } from './Order.types'

const initialState: OrderContextState = {
  addressInformation: null,
  dispatch: () => {},
}

const OrderContext = createContext<OrderContextState>(initialState)

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
    (newAddressInformation: Partial<AddressInformation>) => {
      dispatch({ type: 'SET_ADDRESS_INFORMATION', payload: { newAddressInformation } })
    },
    [dispatch],
  )

  return { ...state, setAddressInformation }
}
