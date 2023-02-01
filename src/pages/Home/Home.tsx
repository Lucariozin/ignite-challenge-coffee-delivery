import { Presentation } from '@components/Presentation'
import { CoffeeItem } from '@components/CoffeeItem'

import { CoffeeListContainer, OurCoffeesTitle, CoffeeList } from './Home.styles'

import { coffeeList } from './Home.mock'

export const Home = () => {
  return (
    <>
      <Presentation />

      <CoffeeListContainer>
        <OurCoffeesTitle>Nossos cafés</OurCoffeesTitle>

        <CoffeeList>
          {coffeeList.map(({ id, name, description, labels, price, image }) => (
            <CoffeeItem key={id} name={name} description={description} labels={labels} price={price} image={image} />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
