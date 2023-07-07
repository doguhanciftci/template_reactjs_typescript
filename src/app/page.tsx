'use client'

import { ContextProvider } from "~/ui/context";
import { TodosPage } from "~/ui/todos";

export default function Todos() {

  return (
    <ContextProvider>
      <TodosPage />
    </ContextProvider>
  )
}