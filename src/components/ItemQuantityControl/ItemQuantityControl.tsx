import { Minus, Plus } from 'phosphor-react'

import { Container, DecrementItems, IncrementItems, ItemsAmount } from './ItemQuantityControl.styles'

interface ItemQuantityControlProps {
  quantity: number
  setQuantity: (newQuantity: number) => void
}

export const ItemQuantityControl = ({ quantity = 0, setQuantity = () => {} }: ItemQuantityControlProps) => {
  const handleDecrementQuantity = () => setQuantity(quantity - 1)
  const handleIncrementQuantity = () => setQuantity(quantity + 1)

  return (
    <Container>
      <DecrementItems type="button" title="Remover uma unidade do carrinho" onClick={handleDecrementQuantity}>
        <Minus size={14} weight="fill" />
      </DecrementItems>

      <ItemsAmount>{quantity}</ItemsAmount>

      <IncrementItems type="button" title="Adicionar uma unidade no carrinho" onClick={handleIncrementQuantity}>
        <Plus size={14} weight="fill" />
      </IncrementItems>
    </Container>
  )
}
