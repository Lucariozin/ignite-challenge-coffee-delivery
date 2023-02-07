import * as zod from 'zod'

export const zodSchema = zod.object({
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

export type AddressFormInputs = zod.infer<typeof zodSchema>
