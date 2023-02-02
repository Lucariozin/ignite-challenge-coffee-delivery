import { Dispatch, ReactNode } from 'react'
import { RuducerAction } from './Cart.reducer'

export type Item = {
  id: string
  name: string
  description: string
  labels: string[]
  price: number
  image: string
  quantity: number
}

export interface CartContextState {
  items: Item[]
  dispatch: Dispatch<RuducerAction>
}

export interface CartProviderProps {
  children: ReactNode
}
