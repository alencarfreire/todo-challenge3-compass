import React, { useContext, useState, useEffect } from "react";
import Task from "../Task";
import TasksStatus from "../TasksStatus";
import { FlatList, View, Text } from "react-native";
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
      const attData = await getData();
      setTasks(attData);
      setIsLoading(false);
    };
    loadTasks();
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
    // return () => clearTimeout(timer);
  }, []);

  if (!context) {
    return (
      <>
        <TasksStatus created="0" done="0" />
        <NoTasks />
      </>
    );
  }

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

  const sortedTasks = [...tasks].sort(
    (a, b) => Number(a.status) - Number(b.status)
  );

  return (
    <>
      <TasksStatus
        created={tasks.length.toString()}
        done={completedTasksCount.toString()}
      />
      <FlatList
        data={sortedTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Task tarefa={item.tarefa} status={item.status} />
        )}
        initialNumToRender={6}
      />
    </>
  );
}
