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
