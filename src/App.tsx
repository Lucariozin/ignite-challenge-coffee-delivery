import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@styles/global'
import { theme } from '@styles/theme'

import { CartProvider } from '@contexts/Cart'
import { OrderProvider } from '@contexts/Order'

import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <OrderProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </OrderProvider>
    </ThemeProvider>
  )
}
