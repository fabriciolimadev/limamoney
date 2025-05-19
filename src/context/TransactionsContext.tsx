import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  value: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  sumaryList: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
  isLoading: boolean;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface CreateTransactionInput {
  description: string;
  value: number;
  category: string;
  type: "income" | "outcome";
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [sumaryList, setSummaryList] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getSummary() {
    try {
      api.get("/transactions").then((response) => {
        const transactions = response.data;
        setSummaryList(transactions);
      });
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  }

  async function fetchTransactions(query?: string) {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query,
        },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setIsLoading(false);
    }
  }
  async function createTransaction(data: CreateTransactionInput) {
    const { description, value, category, type } = data;
    try {
      setIsLoading(true);
      const response = await api.post("/transactions", {
        description,
        value,
        category,
        type,
        createdAt: new Date(),
      });
      setTransactions((prev) => [response.data, ...prev]);
      setSummaryList((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error creating transaction:", error);
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteTransaction(id: number) {
    try {
      setIsLoading(true);
      api.delete(`http://localhost:3000/transactions/${id}`);
      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );
      setSummaryList((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.error("Error deleting transaction:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchTransactions();
    getSummary();
  }, []);
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        deleteTransaction,
        sumaryList,
        createTransaction,
        isLoading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
