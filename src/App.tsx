import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@styles/global'
import { theme } from '@styles/theme'

import { CartProvider } from './contexts/Cart'

import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <CartProvider>
        <Router />
      </CartProvider>
    </ThemeProvider>
  )
}
