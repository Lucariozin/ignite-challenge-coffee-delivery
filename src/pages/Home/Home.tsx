import { Presentation } from '@components/Presentation'
import { CoffeeItem } from '@components/CoffeeItem'

import { CoffeeListContainer, OurCoffeesTitle, CoffeeList } from './Home.styles'

export const Home = () => {
  return (
    <>
      <Presentation />

      <CoffeeListContainer>
        <OurCoffeesTitle>Nossos cafés</OurCoffeesTitle>

        <CoffeeList>
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
