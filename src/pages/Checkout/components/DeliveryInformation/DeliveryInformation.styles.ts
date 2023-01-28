import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.gray[200]};
`

export const AddressContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  & svg {
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.palette.yellow[500]};
  }
`

export const AddressTextContainer = styled.div``

export const DeliveryAddressTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.palette.gray[800]};
`

export const DeliveryAddressText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > input:first-child {
    max-width: 12.5rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2.625rem;
  padding: 0 0.75rem;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[700]};

  outline: 0;
  outline-color: transparent;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.gray[400]};
  background-color: ${({ theme }) => theme.palette.gray[300]};

  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.palette.gray[600]};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.palette.yellow[500]};
  }
`

export const AddressInputsWrapper = styled.div`
  display: flex;
  gap: 0.875rem;
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

  & input:nth-child(2) {
    max-width: 3.75rem;
  }
`
