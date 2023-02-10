import type { FieldErrors, UseFormRegister } from 'react-hook-form'

import { MapPinLine } from 'phosphor-react'

import { AddressForm, AddressFormInputs } from '@components/AddressForm'

import {
  AddressContainer,
  AddressTextContainer,
  Container,
  DeliveryAddressText,
  DeliveryAddressTitle,
} from './DeliveryInformation.styles'

interface DeliveryInformationProps {
  register: UseFormRegister<AddressFormInputs>
  errors: FieldErrors<AddressFormInputs>
  handleSubmit: () => void
}

export const DeliveryInformation = ({ register, errors, handleSubmit }: DeliveryInformationProps) => {
  return (
    <Container>
      <AddressContainer>
        <MapPinLine size={24} />

        <AddressTextContainer>
          <DeliveryAddressTitle>Endereço de Entrega</DeliveryAddressTitle>
          <DeliveryAddressText>Informe o endereço onde deseja receber seu pedido</DeliveryAddressText>
        </AddressTextContainer>
      </AddressContainer>

      <AddressForm register={register} errors={errors} handleSubmit={handleSubmit} />
    </Container>
  )
}
