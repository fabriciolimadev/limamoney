import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
  const { createTransaction } = useContext(TransactionsContext);
  const { register, handleSubmit, formState, control, reset } =
    useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionFormSchema),
      defaultValues: {
        type: "income",
      },
    });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    createTransaction(data);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} aria-label="Fechar" />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("value", {
              valueAsNumber: true,
            })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={formState.isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
