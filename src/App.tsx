import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <h1>Hello world</h1>
    </ThemeProvider>
  )
}
