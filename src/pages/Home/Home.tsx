import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  AdvantageIcon,
  AdvantageItem,
  AdvantagesContainer,
  AdvantageText,
  BlurredBackground,
  CoffeeImage,
  CoffeeImageContainer,
  Container,
  LeftColumn,
  PresentationContainer,
  RightColumn,
  Text,
  Title,
} from './Home.styles'

export const Home = () => {
  const { palette } = useTheme()

  return (
    <>
      <BlurredBackground />

      <Container>
        <PresentationContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>

          <Text>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Text>

          <AdvantagesContainer>
            <LeftColumn>
              <AdvantageItem>
                <AdvantageIcon backgroundColor={palette.yellow[500]}>
                  <ShoppingCart size={16} weight="fill" />
                </AdvantageIcon>

                <AdvantageText>Compra simples e segura</AdvantageText>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon backgroundColor={palette.yellow[400]}>
                  <Timer size={16} weight="fill" />
                </AdvantageIcon>

                <AdvantageText>Entrega rápida e rastreada</AdvantageText>
              </AdvantageItem>
            </LeftColumn>

            <RightColumn>
              <AdvantageItem>
                <AdvantageIcon backgroundColor={palette.gray[700]}>
                  <Package size={16} weight="fill" />
                </AdvantageIcon>

                <AdvantageText>Embalagem mantém o café intacto</AdvantageText>
              </AdvantageItem>

              <AdvantageItem>
                <AdvantageIcon backgroundColor={palette.purple[400]}>
                  <Coffee size={16} weight="fill" />
                </AdvantageIcon>

                <AdvantageText>O café chega fresquinho até você</AdvantageText>
              </AdvantageItem>
            </RightColumn>
          </AdvantagesContainer>
        </PresentationContainer>

        <CoffeeImageContainer>
          <CoffeeImage src="/img/coffee-image.svg" alt="" width={476} height={360} />
        </CoffeeImageContainer>
      </Container>
    </>
  )
}
