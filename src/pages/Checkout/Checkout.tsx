import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCart } from '@contexts/Cart'

import { DeliveryInformation } from './components/DeliveryInformation'
import { PaymentInformation } from './components/PaymentInformation'

import { CartItem } from '@components/CartItem'

import { AddressFormInputs, zodSchema } from '@components/AddressForm'

import {
  CartItemsList,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  Container,
  LeftColumn,
  OrderSummaryContainer,
  OrderTitle,
  RightColumn,
  SelectedCoffeesTitle,
  SummaryPrice,
  SummaryRow,
  SummaryText,
  SummaryTotalContainer,
  SummaryTotalPrice,
  SummaryTotalText,
} from './Checkout.styles'

export const Checkout = () => {
  const { register, handleSubmit, setValue } = useForm<AddressFormInputs>({
    resolver: zodResolver(zodSchema),
  })

  const { items } = useCart()

  const handleAddressFormSubmit = handleSubmit((data: AddressFormInputs) => {
    console.log(data)
  })

  const totalItemsPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const deliveryFee = 3.5
  const totalPrice = totalItemsPrice + deliveryFee

  const formattedTotalItemsPrice = totalItemsPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const formattedDeliveryFee = deliveryFee.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  const formattedTotalPrice = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  const cartIsEmpty = !items.length

  return (
    <Container>
      <LeftColumn>
        <OrderTitle>Complete seu pedido</OrderTitle>

        <DeliveryInformation register={register} handleSubmit={handleAddressFormSubmit} />

        <PaymentInformation register={register} setValue={setValue} />
      </LeftColumn>

      <RightColumn>
        <SelectedCoffeesTitle>Cafés selecionados</SelectedCoffeesTitle>

        <ConfirmOrderContainer>
          <CartItemsList>
            {items.map(({ id, name, image, price, quantity }) => (
              <CartItem key={id} id={id} name={name} image={image} price={price} quantity={quantity} />
            ))}
          </CartItemsList>

          <OrderSummaryContainer>
            <SummaryRow>
              <SummaryText>Total de itens</SummaryText>
              <SummaryPrice>{formattedTotalItemsPrice}</SummaryPrice>
            </SummaryRow>

            <SummaryRow>
              <SummaryText>Entrega</SummaryText>
              <SummaryPrice>{formattedDeliveryFee}</SummaryPrice>
            </SummaryRow>

            <SummaryTotalContainer>
              <SummaryTotalText>Total</SummaryTotalText>
              <SummaryTotalPrice>{formattedTotalPrice}</SummaryTotalPrice>
            </SummaryTotalContainer>
          </OrderSummaryContainer>

          <ConfirmOrderButton type="submit" form="address-form" disabled={cartIsEmpty}>
            CONFIRMAR PEDIDO
          </ConfirmOrderButton>
        </ConfirmOrderContainer>
      </RightColumn>
    </Container>
  )
}
