import React from "react";
import api from "../services/api";

interface Task {
  tarefa: string;
  status: boolean;
  id: number;
}

interface DataContext {
  getData: () => Promise<Task[]>;
  createTask: (task: { name: string }) => void;
  putTask: ({
    name,
    id,
    status,
  }: {
    name: string;
    id: number;
    status: boolean;
  }) => void;
  deleteTask: ({ id }: { id: number }) => void;
}

export const DataContext = React.createContext<DataContext | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export function DataProvider({ children }: Props) {
  const getData = async () => {
    try {
      const response = await api.get("/tarefas");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async ({ name }: { name: string }) => {
    try {
      const response = await api.post("/tarefas", {
        tarefa: name,
      });
      const attData = await getData();
      // setList(attData)
      console.log("clicou botao de criar");
    } catch (error) {
      console.error(error, "não criou a tarefa");
    }
  };

  const putTask = async ({
    name,
    id,
    status,
  }: {
    name: string;
    id: number;
    status: boolean;
  }) => {
    try {
      const response = await api.put(`/tarefas/${id}`, {
        tarefa: name,
        status: status,
      });
    } catch (error) {
      console.error(error, "não editou a tarefa");
    }
  };

  const deleteTask = async ({ id }: { id: number }) => {
    try {
      const response = await api.delete(`/tarefas/${id}`);
      console.log(`Deletou a tarefa ${id}`);
    } catch (error) {
      console.error(error, "não deletou a tarefa");
    }
  };

  return (
    <DataContext.Provider value={{ getData, createTask, putTask, deleteTask }}>
      {children}
    </DataContext.Provider>
  );
}
