type Sizes = 'lg' | 'md' | 'sm'

// eslint-disable-next-line
const sizesObj: { [K in Sizes]: number } = {
  lg: 1200,
  md: 900,
  sm: 600,
}

export const theme = {
  palette: {
    white: '#FFFFFF',
    yellow: {
      100: '#F1E9C9',
      200: '#ecd16f',
      400: '#DBAC2C',
      500: '#C47F17',
    },
    red: {
      400: '#F75A68',
    },
    purple: {
      100: '#EBE5F9',
      300: '#8047F8',
      400: '#673ac7',
      500: '#4B2995',
    },
    gray: {
      100: '#FAFAFA',
      200: '#F3F2F2',
      300: '#EDEDED',
      400: '#E6E5E5',
      500: '#D7D5D5',
      600: '#8D8686',
      700: '#574F4D',
      800: '#403937',
      900: '#272221',
    },
  },
  breakpoints: {
    sizes: sizesObj,
    down: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (max-width: ${sizeNumber}px)`
    },
    up: (size: Sizes | number) => {
      const sizeNumber = typeof size === 'number' ? size : sizesObj[size]

      return `@media (min-width: ${sizeNumber}px)`
    },
  },
} as const

export type CustomTheme = typeof theme
