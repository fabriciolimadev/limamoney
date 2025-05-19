import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  ButtonDelete,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../context/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Trash } from "phosphor-react";

export const Transactions = () => {
  const { transactions, deleteTransaction, isLoading } =
    useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  Carregando...
                </td>
              </tr>
            )}
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {priceFormatter.format(transaction.value)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                <td>
                  <ButtonDelete
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    <Trash size={24} />
                  </ButtonDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
