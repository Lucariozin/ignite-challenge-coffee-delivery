import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import {
  ConfirmedOrderText,
  ConfirmedOrderTitle,
  Container,
  DeliverySummary,
  DeliverySummaryContainer,
  DeliverySummaryRow,
  Icon,
  LinearGradientBorder,
  MotoboyImage,
  RowStrong,
  RowText,
  RowTextContainer,
} from './ConfirmedOrder.styles'

export const ConfirmedOrder = () => {
  const { palette } = useTheme()

  return (
    <Container>
      <DeliverySummaryContainer>
        <ConfirmedOrderTitle>Uhu! Pedido confirmado</ConfirmedOrderTitle>

        <ConfirmedOrderText>Agora é só aguardar que logo o café chegará até você</ConfirmedOrderText>

        <LinearGradientBorder>
          <DeliverySummary>
            <DeliverySummaryRow>
              <Icon color={palette.purple[300]}>
                <MapPin size={16} weight="fill" />
              </Icon>

              <RowTextContainer>
                <RowText>
                  Entrega em <RowStrong>Rua João Daniel Martinelli, 102</RowStrong>
                </RowText>

                <RowText>Farrapos - Porto Alegre, RS</RowText>
              </RowTextContainer>
            </DeliverySummaryRow>

            <DeliverySummaryRow>
              <Icon color={palette.yellow[400]}>
                <Timer size={16} weight="fill" />
              </Icon>

              <RowTextContainer>
                <RowText>Previsão de entrega</RowText>

                <RowStrong>20 min - 30 min</RowStrong>
              </RowTextContainer>
            </DeliverySummaryRow>

            <DeliverySummaryRow>
              <Icon color={palette.yellow[500]}>
                <CurrencyDollar size={16} />
              </Icon>

              <RowTextContainer>
                <RowText>Pagamento na entrega</RowText>

                <RowStrong>Cartão de Crédito</RowStrong>
              </RowTextContainer>
            </DeliverySummaryRow>
          </DeliverySummary>
        </LinearGradientBorder>
      </DeliverySummaryContainer>

      <MotoboyImage src="/img/motoboy.svg" alt="" width={492} height={293} />
    </Container>
  )
}
