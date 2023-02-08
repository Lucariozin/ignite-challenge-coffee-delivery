import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 5rem;
`

export const DeliverySummaryContainer = styled.div`
  width: 100%;
  max-width: 32.875rem;
`

export const ConfirmedOrderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.palette.yellow[500]};
`

export const ConfirmedOrderText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const LinearGradientBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 32.875rem;
  margin-top: 2.5rem;
  padding: 1px;

  border-radius: 6px 2.25rem;
  background-image: linear-gradient(to right, #dbac2c, #8047f8);
`

export const DeliverySummary = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 2.5rem;

  border-radius: 5px 2.15rem;
  background-color: ${({ theme }) => theme.palette.gray[100]};
`

export const DeliverySummaryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconProps {
  color: string
}

export const Icon = styled.span<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  color: ${({ theme }) => theme.palette.gray[100]};
  background-color: ${({ color }) => color};
  border-radius: 50%;
`

export const RowTextContainer = styled.div``

export const RowText = styled.p`
  line-height: 1.4rem;
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const RowStrong = styled.strong`
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const MotoboyImage = styled.img`
  margin-bottom: -0.8rem;
  user-select: none;

  opacity: 0;

  animation: fadeIn forwards 2s;
  animation-delay: 500ms;
`
