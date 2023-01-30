import {
  ConfirmedOrderText,
  ConfirmedOrderTitle,
  Container,
  DeliverySummary,
  DeliverySummaryContainer,
  DeliverySummaryRow,
  Icon,
  RowStrong,
  RowText,
  RowTextContainer,
} from './ConfirmedOrder.styles'

export const ConfirmedOrder = () => {
  return (
    <Container>
      <DeliverySummaryContainer>
        <ConfirmedOrderTitle>Uhu! Pedido confirmado</ConfirmedOrderTitle>

        <ConfirmedOrderText>Agora é só aguardar que logo o café chegará até você</ConfirmedOrderText>

        <DeliverySummary>
          <DeliverySummaryRow>
            <Icon />

            <RowTextContainer>
              <RowText>
                Entrega em <RowStrong>Rua João Daniel Martinelli, 102</RowStrong>
              </RowText>

              <RowText>Farrapos - Porto Alegre, RS</RowText>
            </RowTextContainer>
          </DeliverySummaryRow>

          <DeliverySummaryRow>
            <Icon />

            <RowTextContainer>
              <RowText>Previsão de entrega</RowText>

              <RowStrong>20 min - 30 min</RowStrong>
            </RowTextContainer>
          </DeliverySummaryRow>

          <DeliverySummaryRow>
            <Icon />

            <RowTextContainer>
              <RowText>Pagamento na entrega</RowText>

              <RowStrong>Cartão de Crédito</RowStrong>
            </RowTextContainer>
          </DeliverySummaryRow>
        </DeliverySummary>
      </DeliverySummaryContainer>
    </Container>
  )
}
