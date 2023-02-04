import { MapPinLine } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import { Input } from '@components/Input'

import {
  AddressComplementContainer,
  AddressContainer,
  AddressForm,
  AddressInputsWrapper,
  AddressTextContainer,
  CityAndFederativeUnitContainer,
  Container,
  DeliveryAddressText,
  DeliveryAddressTitle,
  HouseNumberAndDistrictContainer,
} from './DeliveryInformation.styles'

const zodSchema = zod.object({
  cep: zod.string(),
  street: zod.string(),
  houseNumber: zod.string().transform((houseNumber) => Number(houseNumber)),
  neighborhood: zod.string(),
  addressComplement: zod.string(),
  city: zod.string(),
  fu: zod.string(),
})

type AddressFormInputs = zod.infer<typeof zodSchema>

export const DeliveryInformation = () => {
  const { register, handleSubmit } = useForm<AddressFormInputs>({
    resolver: zodResolver(zodSchema),
  })

  const handleAddressFormSubmit = (data: AddressFormInputs) => {
    console.log(data)
  }

  return (
    <Container>
      <AddressContainer>
        <MapPinLine size={24} />

        <AddressTextContainer>
          <DeliveryAddressTitle>Endereço de Entrega</DeliveryAddressTitle>
          <DeliveryAddressText>Informe o endereço onde deseja receber seu pedido</DeliveryAddressText>
        </AddressTextContainer>
      </AddressContainer>

      <AddressForm id="address-form" onSubmit={handleSubmit(handleAddressFormSubmit)}>
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
              <Input labelText="cidade" placeholder="Cidade" {...register('city')} />
              <Input labelText="uf" placeholder="UF" {...register('fu')} />
            </CityAndFederativeUnitContainer>
          </AddressComplementContainer>
        </AddressInputsWrapper>
      </AddressForm>
    </Container>
  )
}
