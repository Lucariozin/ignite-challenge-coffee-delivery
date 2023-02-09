import type { Dispatch, ReactNode } from 'react'
import type { ReducerAction } from './Order.reducer'

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

export interface OrderContextState {
  addressInformation: AddressInformation | null
  dispatch: Dispatch<ReducerAction>
}

export interface OrderProviderProps {
  children: ReactNode
}
