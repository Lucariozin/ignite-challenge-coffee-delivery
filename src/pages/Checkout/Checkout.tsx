import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { DeliveryInformation } from './components/DeliveryInformation'

import {
  Container,
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

        <DeliveryInformation />

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
