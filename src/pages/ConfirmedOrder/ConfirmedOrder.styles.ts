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

  ${({ theme }) => theme.breakpoints.down(1100)} {
    margin: 0 auto;
  }
`

export const ConfirmedOrderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.palette.yellow[500]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1.5rem;
  }
`

export const ConfirmedOrderText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 1rem;
  }
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

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 1rem 1.2rem;
  }
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

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 1.75rem;
    height: 1.75rem;

    & > svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`

export const RowTextContainer = styled.div``

export const RowText = styled.p`
  line-height: 1.4rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }
`

export const RowStrong = styled.strong`
  color: ${({ theme }) => theme.palette.gray[700]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
  }
`

export const MotoboyImage = styled.img`
  margin-bottom: -0.8rem;
  user-select: none;

  opacity: 0;

  animation: fadeIn forwards 2s;
  animation-delay: 500ms;

  ${({ theme }) => theme.breakpoints.down(1100)} {
    display: none;
  }
`
