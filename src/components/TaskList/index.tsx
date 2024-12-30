import React, { useContext, useState, useEffect } from "react";
import Task from "../Task";
import TasksStatus from "../TasksStatus";
import { FlatList, View, Text } from "react-native";
import { DataContext } from "../../context/DataContext";
import NoTasks from "../NoTasks";
import Loading from "../Loading";
import * as S from "./styles";

export default function TaskList() {
  const context = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!context) {
    return (
      <>
        <TasksStatus created="0" done="0" />
        <NoTasks />
      </>
    );
  }

  const { tasks } = context;
  const completedTasksCount = tasks.filter((task) => task.done).length;

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
    (a, b) => Number(a.done) - Number(b.done)
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
        renderItem={({ item }) => <Task name={item.name} done={item.done} />}
        initialNumToRender={6}
      />
    </>
  );
}
