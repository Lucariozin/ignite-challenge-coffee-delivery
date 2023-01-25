import styled from 'styled-components'

export const BlurredBackground = styled.div`
  height: 34.625rem;
  position: absolute;
  right: 0;
  left: 0;

  background-image: url('/img/blurred-background.svg');
  background-size: cover;
  background-position: center;

  filter: blur(2rem);
`

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5.875rem 0;
  position: relative;
  z-index: 1;
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 35.5rem;

  animation: fadeIn 2s forwards;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 4rem;
  color: ${({ theme }) => theme.palette.gray[900]};
`

export const Text = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const AdvantagesContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 3.125rem;
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const AdvantageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface AdvantageIconProps {
  backgroundColor: string
}

export const AdvantageIcon = styled.div<AdvantageIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${({ theme }) => theme.palette.gray[100]};
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const AdvantageText = styled.span`
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const CoffeeImageContainer = styled.div`
  opacity: 0;
  position: relative;
  animation: fadeIn 1.2s forwards 0.4s;
`

export const CoffeeImage = styled.img`
  @keyframes show {
    from {
      right: -10rem;
    }

    to {
      right: 0;
    }
  }

  user-select: none;
  position: relative;
  animation: show 1.2s forwards 0.4s;
`
