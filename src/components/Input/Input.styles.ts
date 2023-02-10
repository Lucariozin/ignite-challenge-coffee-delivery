import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Label = styled.label`
  position: absolute;

  display: inline-block;
  width: fit-content;
  margin: -0.5rem 0 0 10px;
  padding: 0 5px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.yellow[500]};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.gray[400]};
  background-color: ${({ theme }) => theme.palette.gray[200]};
`

interface InputComponentProps {
  error: boolean
}

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 2.625rem;
  padding: 0 0.75rem;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  outline: 0;
  outline-color: transparent;
  border-radius: 4px;
  border: 1px solid ${({ theme, error }) => (error ? theme.palette.red[400] : theme.palette.gray[400])};
  background-color: ${({ theme }) => theme.palette.gray[300]};

  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.palette.gray[600]};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.palette.yellow[500]};
  }
`
