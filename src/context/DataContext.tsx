import React from "react";
import { dataTasks } from "../data/dataTasks";

interface Task {
  name: string;
  done: boolean;
}

interface DataContext {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const DataContext = React.createContext<DataContext | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export function DataProvider({ children }: Props) {
  const [tasks, setTasks] = React.useState<Task[]>(dataTasks);

  return (
    <DataContext.Provider value={{ tasks, setTasks }}>
      {children}
    </DataContext.Provider>
  );
}
