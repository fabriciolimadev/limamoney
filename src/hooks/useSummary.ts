import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useSummary() {
  const { sumaryList } = useContext(TransactionsContext);

  const summary = sumaryList.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.outcome += transaction.value;
        acc.total -= transaction.value;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return summary;
}
