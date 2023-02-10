import type { FieldErrors, UseFormRegister } from 'react-hook-form'

import { AddressFormInputs } from './zodSchema'

import { useOrder } from '@contexts/Order'

import { Input } from '@components/Input'

import {
  AddressComplementContainer,
  AddressInputsWrapper,
  CityAndFederativeUnitContainer,
  Container,
  HouseNumberAndDistrictContainer,
} from './AddressForm.styles'

interface AddressFormProps {
  register: UseFormRegister<AddressFormInputs>
  errors?: FieldErrors<AddressFormInputs>
  handleSubmit: () => void
}

export const AddressForm = ({ register, errors, handleSubmit = () => {} }: AddressFormProps) => {
  const { addressInformation } = useOrder()

  return (
    <Container id="address-form" onSubmit={handleSubmit}>
      <Input labelText="cep" placeholder="CEP" error={!!errors?.cep} {...register('cep')} />
      <Input labelText="rua" placeholder="Rua" error={!!errors?.street} {...register('street')} />

      <AddressInputsWrapper>
        <HouseNumberAndDistrictContainer>
          <Input labelText="número" placeholder="Número" error={!!errors?.houseNumber} {...register('houseNumber')} />
          <Input labelText="bairro" placeholder="Bairro" error={!!errors?.neighborhood} {...register('neighborhood')} />
        </HouseNumberAndDistrictContainer>

        <AddressComplementContainer>
          <Input
            labelText="complemento"
            placeholder="Complemento"
            error={!!errors?.addressComplement}
            {...register('addressComplement')}
          />

          <CityAndFederativeUnitContainer>
            <Input
              labelText="cidade"
              placeholder="Cidade"
              error={!!errors?.city}
              defaultValue={addressInformation?.city ?? ''}
              {...register('city')}
            />

            <Input
              labelText="uf"
              placeholder="UF"
              error={!!errors?.fu}
              defaultValue={addressInformation?.fu ?? ''}
              {...register('fu')}
            />
          </CityAndFederativeUnitContainer>
        </AddressComplementContainer>
      </AddressInputsWrapper>
    </Container>
  )
}
