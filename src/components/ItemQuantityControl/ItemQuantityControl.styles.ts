import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9.5px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[400]};
`

export const ItemsAmount = styled.span`
  color: ${({ theme }) => theme.palette.gray[900]};
`

const BaseButton = styled.button`
  border: 0;
  outline: 0;
  line-height: 0;
  border-radius: 50%;
  outline-color: transparent;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.purple[300]};

  cursor: pointer;
  transition: color 0.2s, outline-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.palette.purple[500]};
  }

  &:focus-visible {
    color: ${({ theme }) => theme.palette.purple[500]};
    outline: 1px solid ${({ theme }) => theme.palette.purple[500]};
  }
`

export const DecrementItems = styled(BaseButton)``

export const IncrementItems = styled(BaseButton)``
