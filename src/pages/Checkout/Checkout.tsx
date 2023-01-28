import { DeliveryInformation } from './components/DeliveryInformation'
import { PaymentInformation } from './components/PaymentInformation'

import { Container, LeftColumn, OrderTitle } from './Checkout.styles'

export const Checkout = () => {
  return (
    <Container>
      <LeftColumn>
        <OrderTitle>Complete seu pedido</OrderTitle>

        <DeliveryInformation />

        <PaymentInformation />
      </LeftColumn>
    </Container>
  )
}
