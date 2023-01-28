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
  DeliveryInformationContainer,
  HouseNumberAndDistrictContainer,
  Icon,
  Input,
  LeftColumn,
  OrderTitle,
  PaymentInformationContainer,
} from './Checkout.styles'

export const Checkout = () => {
  return (
    <Container>
      <LeftColumn>
        <OrderTitle>Complete seu pedido</OrderTitle>

        <DeliveryInformationContainer>
          <AddressContainer>
            <Icon />

            <AddressTextContainer>
              <DeliveryAddressTitle>Endereço de Entrega</DeliveryAddressTitle>
              <DeliveryAddressText>Informe o endereço onde deseja receber seu pedido</DeliveryAddressText>
            </AddressTextContainer>
          </AddressContainer>

          <AddressForm>
            <Input />
            <Input />

            <AddressInputsWrapper>
              <HouseNumberAndDistrictContainer>
                <Input />
                <Input />
              </HouseNumberAndDistrictContainer>

              <AddressComplementContainer>
                <Input />

                <CityAndFederativeUnitContainer>
                  <Input />
                  <Input />
                </CityAndFederativeUnitContainer>
              </AddressComplementContainer>
            </AddressInputsWrapper>
          </AddressForm>
        </DeliveryInformationContainer>

        <PaymentInformationContainer></PaymentInformationContainer>
      </LeftColumn>
    </Container>
  )
}
