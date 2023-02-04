import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const ItemImage = styled.img`
  user-select: none;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemName = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  height: 2rem;
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[400]};

  cursor: pointer;
  transition: background-color 0.2s;

  & svg {
    color: ${({ theme }) => theme.palette.purple[300]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray[500]};
  }
`

export const ItemPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[700]};
  margin: 0 0 auto auto;
`
