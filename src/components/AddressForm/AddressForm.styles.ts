import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div:first-child {
    max-width: 12.5rem;
  }
`

export const AddressInputsWrapper = styled.div`
  display: flex;
  gap: 0.875rem;

  ${({ theme }) => theme.breakpoints.down(1000)} {
    flex-direction: column;
  }
`

export const HouseNumberAndDistrictContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 12.5rem;
  flex-direction: column;
  gap: 1rem;
`

export const AddressComplementContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`

export const CityAndFederativeUnitContainer = styled.div`
  display: flex;
  gap: 0.875rem;

  & div:nth-child(2) {
    max-width: 3.75rem;
  }
`
