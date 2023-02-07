import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import { Input } from '@components/Input'

import {
  AddressComplementContainer,
  AddressInputsWrapper,
  CityAndFederativeUnitContainer,
  Container,
  HouseNumberAndDistrictContainer,
} from './AddressForm.styles'

const zodSchema = zod.object({
  cep: zod.string().min(1).max(255),
  street: zod
    .string()
    .min(1)
    .max(255)
    .refine((city) => isNaN(Number(city))),
  houseNumber: zod
    .string()
    .min(1)
    .max(255)
    .transform((houseNumber) => Number(houseNumber))
    .refine((houseNumber) => !isNaN(houseNumber)),
  neighborhood: zod
    .string()
    .min(1)
    .max(255)
    .refine((city) => isNaN(Number(city))),
  addressComplement: zod
    .string()
    .min(1)
    .max(255)
    .refine((city) => isNaN(Number(city))),
  city: zod
    .string()
    .min(1)
    .max(255)
    .refine((city) => isNaN(Number(city))),
  fu: zod
    .string()
    .min(2)
    .max(2)
    .refine((fu) => isNaN(Number(fu)))
    .transform((fu) => fu.toLocaleUpperCase()),
})

type AddressFormInputs = zod.infer<typeof zodSchema>

export const AddressForm = () => {
  const { register, handleSubmit } = useForm<AddressFormInputs>({
    resolver: zodResolver(zodSchema),
  })

  const handleAddressFormSubmit = (data: AddressFormInputs) => {
    console.log(data)
  }

  return (
    <Container id="address-form" onSubmit={handleSubmit(handleAddressFormSubmit)}>
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
    </Container>
  )
}
