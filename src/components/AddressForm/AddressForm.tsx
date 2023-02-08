import { UseFormRegister } from 'react-hook-form'

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
  handleSubmit: () => void
}

export const AddressForm = ({ register, handleSubmit = () => {} }: AddressFormProps) => {
  const { addressInformation } = useOrder()

  return (
    <Container id="address-form" onSubmit={handleSubmit}>
      <Input labelText="cep" placeholder="CEP" {...register('cep')} />
      <Input labelText="rua" placeholder="Rua" {...register('street')} />

      <AddressInputsWrapper>
        <HouseNumberAndDistrictContainer>
          <Input labelText="número" placeholder="Número" {...register('houseNumber')} />
          <Input labelText="bairro" placeholder="Bairro" {...register('neighborhood')} />
        </HouseNumberAndDistrictContainer>

        <AddressComplementContainer>
          <Input labelText="complemento" placeholder="Complemento" {...register('addressComplement')} />

          <CityAndFederativeUnitContainer>
            <Input
              labelText="cidade"
              placeholder="Cidade"
              defaultValue={addressInformation?.city ?? ''}
              {...register('city')}
            />

            <Input labelText="uf" placeholder="UF" defaultValue={addressInformation?.fu ?? ''} {...register('fu')} />
          </CityAndFederativeUnitContainer>
        </AddressComplementContainer>
      </AddressInputsWrapper>
    </Container>
  )
}
