import styled from 'styled-components'

import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface ContainerProps {
  error: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[200]};

  border: 1px solid ${({ theme, error }) => (error ? theme.palette.red[400] : theme.palette.gray[200])};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 1.5rem;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  & svg {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.palette.purple[300]};
  }
`

export const PaymentTextContainer = styled.div``

export const PaymentTextTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const PaymentTextText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const PaymentMethodContainer = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.75rem;

  ${({ theme }) => theme.breakpoints.down(1100)} {
    flex-direction: column;
  }
`

export const PaymentMethodItem = styled(ToggleGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  height: 3.25rem;
  padding: 0 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  border: 1px solid ${({ theme }) => theme.palette.gray[400]};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[400]};

  outline: 0;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  outline-color: transparent;
  transition: background-color 0.2s, border-color 0.2s, outline-color 0.2s;

  & svg {
    color: ${({ theme }) => theme.palette.purple[300]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[500]};
  }

  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.palette.yellow[500]};
  }

  &[data-state='on'] {
    background-color: ${({ theme }) => theme.palette.purple[100]};
  }

  &:not(:focus-visible)[data-state='on'] {
    border: 1px solid ${({ theme }) => theme.palette.purple[300]};
  }
`
