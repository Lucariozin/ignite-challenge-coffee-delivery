import { useTheme } from 'styled-components'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Address, CartButton, CartContainer, Container, Logo, Wrapper } from './Header.styles'

export const Header = () => {
  const { palette } = useTheme()

  return (
    <Container>
      <Wrapper>
        <Logo src="/img/coffee-delivery-logo.svg" alt="" width={84.95} height={40} />

        <CartContainer>
          <Address>
            <MapPin size={22} weight="fill" color={palette.purple[400]} />
            Porto Alegre, RS
          </Address>

          <CartButton>
            <ShoppingCart size={22} weight="fill" color={palette.yellow[500]} />
          </CartButton>
        </CartContainer>
      </Wrapper>
    </Container>
  )
}
