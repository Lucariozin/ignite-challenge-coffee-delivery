import { MapPinLine } from 'phosphor-react'

import { AddressForm } from '@components/AddressForm'

import {
  AddressContainer,
  AddressTextContainer,
  Container,
  DeliveryAddressText,
  DeliveryAddressTitle,
} from './DeliveryInformation.styles'

export const DeliveryInformation = () => {
  return (
    <Container>
      <AddressContainer>
        <MapPinLine size={24} />

        <AddressTextContainer>
          <DeliveryAddressTitle>Endereço de Entrega</DeliveryAddressTitle>
          <DeliveryAddressText>Informe o endereço onde deseja receber seu pedido</DeliveryAddressText>
        </AddressTextContainer>
      </AddressContainer>

      <AddressForm />
    </Container>
  )
}
