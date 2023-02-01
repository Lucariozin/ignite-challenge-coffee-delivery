import { createContext, ReactNode, useContext, useReducer } from 'react'

type Item = {
  id: string
  name: string
  description: string
  labels: string[]
  price: number
  image: string
}

interface CartContextState {
  items: Item[]
}

const initialState: CartContextState = {
  items: [],
}

const CartContext = createContext<CartContextState>(initialState)

const reducer = (state: CartContextState, action: any) => {
  return state
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
