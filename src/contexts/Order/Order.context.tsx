import { createContext, ReactNode, useContext, useReducer, Dispatch } from 'react'

type AddressInformation = {
  cep: string
  street: string
  houseNumber: number
  neighborhood: string
  addressComplement: string
  city: string
  fu: string
  paymentMethod: 'credit-card' | 'debit-card' | 'cash'
}

interface OrderContextState {
  addressInformation: AddressInformation | null
  dispatch: Dispatch<any>
}

const initialState: OrderContextState = {
  addressInformation: null,
  dispatch: () => {},
}

const OrderContext = createContext<OrderContextState>(initialState)

const reducer = (state: OrderContextState, action: any) => {
  return state
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

  return { ...state }
}
