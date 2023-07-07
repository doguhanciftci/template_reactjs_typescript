'use client'

import { TodosPage } from "~/ui/todos";
import { ContextProvider } from "~/ui/context";

export default function Todos() {

  return (
    <ContextProvider>
      <TodosPage />
    </ContextProvider>
  )
}