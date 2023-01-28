import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

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
  Input,
  LeftColumn,
  OrderTitle,
  PaymentContainer,
  PaymentInformationContainer,
  PaymentMethodContainer,
  PaymentMethodItem,
  PaymentTextContainer,
  PaymentTextText,
  PaymentTextTitle,
} from './Checkout.styles'

export const Checkout = () => {
  return (
    <Container>
      <LeftColumn>
        <OrderTitle>Complete seu pedido</OrderTitle>

        <DeliveryInformationContainer>
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
        </DeliveryInformationContainer>

        <PaymentInformationContainer>
          <PaymentContainer>
            <CurrencyDollar size={24} />

            <PaymentTextContainer>
              <PaymentTextTitle>Pagamento</PaymentTextTitle>
              <PaymentTextText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</PaymentTextText>
            </PaymentTextContainer>
          </PaymentContainer>

          <PaymentMethodContainer>
            <PaymentMethodItem>
              <CreditCard size={20} />
              CARTÃO DE CRÉDITO
            </PaymentMethodItem>

            <PaymentMethodItem>
              <Bank size={20} />
              CARTÃO DE DÉBITO
            </PaymentMethodItem>

            <PaymentMethodItem>
              <Money size={20} />
              DINHEIRO
            </PaymentMethodItem>
          </PaymentMethodContainer>
        </PaymentInformationContainer>
      </LeftColumn>
    </Container>
  )
}
