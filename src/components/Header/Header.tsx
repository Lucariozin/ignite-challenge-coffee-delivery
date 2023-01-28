import { MapPin, ShoppingCart } from 'phosphor-react'

import { Address, CartAnchor, CartContainer, Container, Logo, Wrapper } from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="/img/coffee-delivery-logo.svg" alt="" width={84.95} height={40} />

        <CartContainer>
          <Address>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Address>

          <CartAnchor to="/checkout" title="Ir para a tela de checkout">
            <ShoppingCart size={22} weight="fill" />
          </CartAnchor>
        </CartContainer>
      </Wrapper>
    </Container>
  )
}
