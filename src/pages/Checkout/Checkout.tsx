import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCart } from '@contexts/Cart'
import { useOrder } from '@contexts/Order'

import { CartItem } from '@components/CartItem'
import { DeliveryInformation } from './components/DeliveryInformation'
import { PaymentInformation } from './components/PaymentInformation'

import { AddressFormInputs, zodSchema } from '@components/AddressForm'

import type { AddressInformation } from '@contexts/Order/Order.types'

import {
  CartItemsList,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  Container,
  LeftColumn,
  Loader,
  OrderSummaryContainer,
  OrderTitle,
  RightColumn,
  SeeAllItemsButton,
  SelectedCoffeesTitle,
  SummaryPrice,
  SummaryRow,
  SummaryText,
  SummaryTotalContainer,
  SummaryTotalPrice,
  SummaryTotalText,
} from './Checkout.styles'
import { CaretRight } from 'phosphor-react'

export const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, setValue, watch, formState } = useForm<AddressFormInputs>({
    resolver: zodResolver(zodSchema),
  })

  const city = watch('city')
  const fu = watch('fu')?.toUpperCase()

  const navigate = useNavigate()

  const { items, clearItemsFromTheCart } = useCart()
  const { setAddressInformation } = useOrder()

  const handleAddressFormSubmit = handleSubmit(async (data: AddressFormInputs) => {
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)

    clearItemsFromTheCart()
    setAddressInformation({ ...data, paymentMethod: data.paymentMethod as AddressInformation['paymentMethod'] })

    navigate('/pedido-confirmado')
  })

  useEffect(() => {
    if (!city?.length || !fu?.length || fu?.length < 2) return

    setAddressInformation({ city, fu })
  }, [city, fu, setAddressInformation])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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

        <DeliveryInformation register={register} errors={formState.errors} handleSubmit={handleAddressFormSubmit} />

        <PaymentInformation register={register} errors={formState.errors} setValue={setValue} />
      </LeftColumn>

      <RightColumn>
        <SelectedCoffeesTitle>Cafés selecionados</SelectedCoffeesTitle>

        <ConfirmOrderContainer>
          <CartItemsList>
            {items.map(({ id, name, image, price, quantity }) => (
              <CartItem key={id} id={id} name={name} image={image} price={price} quantity={quantity} />
            ))}
          </CartItemsList>

          <SeeAllItemsButton>
            Ver todos
            <CaretRight size={18} weight="bold" />
          </SeeAllItemsButton>

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

          <ConfirmOrderButton type="submit" form="address-form" disabled={cartIsEmpty || isLoading}>
            {isLoading ? <Loader /> : 'CONFIRMAR PEDIDO'}
          </ConfirmOrderButton>
        </ConfirmOrderContainer>
      </RightColumn>
    </Container>
  )
}
