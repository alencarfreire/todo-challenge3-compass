import React, { useContext, useState, useEffect } from "react";
import Task from "../Task";
import TasksStatus from "../TasksStatus";
import { FlatList, Text } from "react-native";
import { DataContext } from "../../context/DataContext";
import NoTasks from "../NoTasks";
import Loading from "../Loading";
import * as S from "./styles";

interface Tasks {
  tarefa: string;
  status: boolean;
  id: number;
}

export default function TaskList({
  tasks,
  setTasks,
}: {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}) {
  const context = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  if (!context) {
    throw new Error("n rodou");
  }

  const { getData } = context;

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const attData = await getData();
        setTasks(Array.isArray(attData) ? attData : []);
      } catch (error) {
        console.error("Erro ao carregar tarefas", error);
        setTasks([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadTasks();
  }, []);

  const completedTasksCount = tasks.filter((task) => task.status).length;

  if (isLoading) {
    return (
      <S.ContainerLoading>
        <Loading />
      </S.ContainerLoading>
    );
  }

  if (tasks.length === 0) {
    return (
      <>
        <TasksStatus created="0" done="0" />
        <NoTasks />
      </>
    );
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status ? 1 : -1;
  });

  return (
    <>
      <TasksStatus
        created={tasks.length.toString()}
        done={completedTasksCount.toString()}
      />
      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            tarefa={item.tarefa}
            status={item.status}
            id={item.id}
            setTasks={setTasks}
          />
        )}
        initialNumToRender={6}
      />
    </>
  );
}
