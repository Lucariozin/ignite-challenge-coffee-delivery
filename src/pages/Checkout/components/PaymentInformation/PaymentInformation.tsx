import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import type { AddressFormInputs } from '@components/AddressForm'

import {
  Container,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodItem,
  PaymentTextContainer,
  PaymentTextText,
  PaymentTextTitle,
} from './PaymentInformation.styles'

interface PaymentInformationProps {
  register: UseFormRegister<AddressFormInputs>
  setValue: UseFormSetValue<AddressFormInputs>
}

export const PaymentInformation = ({ register, setValue }: PaymentInformationProps) => {
  const onPaymentMethodChange = (value: 'credit-card' | 'debit-card' | 'cash' | '') => setValue('paymentMethod', value)

  return (
    <Container>
      <PaymentContainer>
        <CurrencyDollar size={24} />

        <PaymentTextContainer>
          <PaymentTextTitle>Pagamento</PaymentTextTitle>
          <PaymentTextText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</PaymentTextText>
        </PaymentTextContainer>
      </PaymentContainer>

      <PaymentMethodContainer type="single" onValueChange={onPaymentMethodChange} {...register('paymentMethod')}>
        <PaymentMethodItem value="credit-card" tabIndex={0}>
          <CreditCard size={20} />
          CARTÃO DE CRÉDITO
        </PaymentMethodItem>

        <PaymentMethodItem value="debit-card" tabIndex={0}>
          <Bank size={20} />
          CARTÃO DE DÉBITO
        </PaymentMethodItem>

        <PaymentMethodItem value="cash" tabIndex={0}>
          <Money size={20} />
          DINHEIRO
        </PaymentMethodItem>
      </PaymentMethodContainer>
    </Container>
  )
}
