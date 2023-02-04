import { Minus, Plus } from 'phosphor-react'

import { Container, DecrementItems, IncrementItems, ItemsAmount } from './ItemQuantityControl.styles'

interface ItemQuantityControlProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export const ItemQuantityControl = ({
  quantity = 0,
  incrementQuantity = () => {},
  decrementQuantity = () => {},
}: ItemQuantityControlProps) => {
  return (
    <Container>
      <DecrementItems type="button" title="Remover uma unidade do carrinho" onClick={decrementQuantity}>
        <Minus size={14} weight="fill" />
      </DecrementItems>

      <ItemsAmount>{quantity}</ItemsAmount>

      <IncrementItems type="button" title="Adicionar uma unidade no carrinho" onClick={incrementQuantity}>
        <Plus size={14} weight="fill" />
      </IncrementItems>
    </Container>
  )
}
