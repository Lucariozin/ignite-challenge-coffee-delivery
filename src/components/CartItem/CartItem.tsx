import { Trash } from 'phosphor-react'

import { useCart } from '@contexts/Cart'

import { ItemQuantityControl } from '@components/ItemQuantityControl'

import {
  Actions,
  ActionsContainer,
  Container,
  ItemImage,
  ItemName,
  ItemPrice,
  RemoveItemButton,
} from './CartItem.styles'

interface CartItemProps {
  id: string
  image: string
  name: string
  price: number
  quantity: number
}

export const CartItem = ({ id = '', image = '', name = '', price = 0, quantity = 0 }: CartItemProps) => {
  const { incrementItemQuantity, decrementItemQuantity, removeItemFromTheCart } = useCart()

  const handleIncrementQuantity = () => incrementItemQuantity(id)

  const handleDecrementQuantity = () => {
    if (!quantity) return

    decrementItemQuantity(id)
  }

  const handleRemoveItemFromTheCart = () => removeItemFromTheCart(id)

  const formattedPrice = price.toLocaleString('pr-br', { style: 'currency', currency: 'BRL' })

  return (
    <Container>
      <ItemImage src={image} alt="Café em uma linda xicara vista de cima" width={64} height={64} />

      <ActionsContainer>
        <ItemName>{name}</ItemName>

        <Actions>
          <ItemQuantityControl
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />

          <RemoveItemButton type="button" onClick={handleRemoveItemFromTheCart}>
            <Trash size={18} />
            REMOVER
          </RemoveItemButton>
        </Actions>
      </ActionsContainer>

      <ItemPrice>{formattedPrice}</ItemPrice>
    </Container>
  )
}
