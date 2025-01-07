import React, { useContext, useState } from "react";
import * as S from "./styles";
import Input from "../Input";
import Button from "../Button";
import CirclePlus from "../../assets/plus-circle-regular.svg";
import HeaderModal from "../HeaderModal";
import { useModal } from "../../context/ModalContext";
import { DataContext } from "../../context/DataContext";

interface Task {
  tarefa: string;
  status: boolean;
  id: number;
}

export default function NewTask({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [newTask, setNewTask] = useState("");
  const context = useContext(DataContext);
  const { closeModal } = useModal();

  if (!context) {
    throw new Error("new");
  }

  const { createTask, getData } = context;

  const handleCreateTask = async () => {
    if (!newTask.trim()) {
      console.error("A tarefa não pode estar vazia.");
      return;
    }

    try {
      await createTask({ name: newTask });
      const attData = await getData();
      setTasks(attData);
      setNewTask("");
      closeModal();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <>
      <HeaderModal title="Nova Tarefa" onPress={closeModal} />
      <S.Form>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <Button onPress={handleCreateTask}>
          <CirclePlus />
        </Button>
      </S.Form>
    </>
  );
}
