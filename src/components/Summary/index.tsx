import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

export const Summary = () => {
  const { isLoading } = useContext(TransactionsContext);
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>
          {isLoading ? "Carregando" : priceFormatter.format(summary.income)}
        </strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {isLoading ? "Carregando" : priceFormatter.format(summary.outcome)}
        </strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffff" />
        </header>
        <strong>
          {isLoading ? "Carregando" : priceFormatter.format(summary.total)}
        </strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
