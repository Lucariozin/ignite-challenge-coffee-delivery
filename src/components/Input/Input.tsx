import { forwardRef, InputHTMLAttributes, RefObject } from 'react'

import { Container, InputComponent, Label } from './Input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

// eslint-disable-next-line
export const Input = forwardRef(({ labelText, ...props }: InputProps, ref) => {
  const inputId = `input-id-${props.name}`

  return (
    <Container>
      {labelText && <Label htmlFor={inputId}>{labelText}</Label>}

      <InputComponent id={inputId} ref={ref as RefObject<HTMLInputElement>} {...props} />
    </Container>
  )
})
