import { MapPinLine } from 'phosphor-react'

import {
  AddressComplementContainer,
  AddressContainer,
  AddressForm,
  AddressInputsWrapper,
  AddressTextContainer,
  CityAndFederativeUnitContainer,
  Container,
  DeliveryAddressText,
  DeliveryAddressTitle,
  HouseNumberAndDistrictContainer,
  Input,
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

      <AddressForm>
        <Input placeholder="CEP" />
        <Input placeholder="Rua" />

        <AddressInputsWrapper>
          <HouseNumberAndDistrictContainer>
            <Input placeholder="Número" />
            <Input placeholder="Bairro" />
          </HouseNumberAndDistrictContainer>

          <AddressComplementContainer>
            <Input placeholder="Complemento" />

            <CityAndFederativeUnitContainer>
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </CityAndFederativeUnitContainer>
          </AddressComplementContainer>
        </AddressInputsWrapper>
      </AddressForm>
    </Container>
  )
}
