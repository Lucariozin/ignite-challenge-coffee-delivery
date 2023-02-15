import { X } from 'phosphor-react'

import type { Item } from '@contexts/Cart/Cart.types'

import { CartItem } from '@components/CartItem'

import { CartItemsList, CloseButton, Container, Content, Overlay } from './CartItemsModal.styles'

interface CartItemsModalProps {
  open: boolean
  closeModal: () => void
  items: Item[]
}

export const CartItemsModal = ({ open = false, closeModal = () => {}, items = [] }: CartItemsModalProps) => {
  return (
    <Container open={open}>
      <Overlay onClick={closeModal} />

      <Content>
        <CloseButton type="button" onClick={closeModal}>
          <X size={22} weight="bold" />
        </CloseButton>

        <CartItemsList>
          {items.map(({ id, name, image, price, quantity }) => (
            <CartItem key={id} id={id} name={name} image={image} price={price} quantity={quantity} />
          ))}
        </CartItemsList>
      </Content>
    </Container>
  )
}
