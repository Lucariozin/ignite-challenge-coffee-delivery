import { useCart } from '@contexts/Cart'
import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  Address,
  CartAnchor,
  CartContainer,
  Container,
  DisabledCartAnchor,
  Logo,
  LogoAnchor,
  Wrapper,
} from './Header.styles'

export const Header = () => {
  const { items } = useCart()

  const cartIsEmpty = !items.length

  return (
    <Container>
      <Wrapper>
        <LogoAnchor to="/">
          <Logo src="/img/coffee-delivery-logo.svg" alt="" width={84.95} height={40} />
        </LogoAnchor>

        <CartContainer>
          <Address>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Address>

          {cartIsEmpty ? (
            <DisabledCartAnchor to="#" title="Adicione items no carrinho para ir a tela de checkout">
              <ShoppingCart size={22} weight="fill" />
            </DisabledCartAnchor>
          ) : (
            <CartAnchor to="/checkout" title="Ir para a tela de checkout">
              <ShoppingCart size={22} weight="fill" />
            </CartAnchor>
          )}
        </CartContainer>
      </Wrapper>
    </Container>
  )
}
