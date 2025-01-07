import React, { useContext, useState } from "react";
import HeaderModal from "../HeaderModal";
import { useModal } from "../../context/ModalContext";
import * as S from "./styles";
import Button from "../Button";
import Input from "../Input";
import { DataContext } from "../../context/DataContext";

type Props = {
  taskName: string;
  taskId: number;
  taskStatus: boolean;
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function TrashButton({
  taskName,
  taskId,
  taskStatus,
  setTasks,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(taskName);
  const { closeModal } = useModal();
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error("DataContext não carregou");
  }

  const { deleteTask, putTask, getData } = dataContext;

  const handlePut = async () => {
    try {
      await putTask({ name: editedName, id: taskId, status: taskStatus });
      const updatedTasks = await getData();
      setTasks(updatedTasks);
      closeModal();
    } catch (error) {
      console.log("Erro ao atualizar tarefa", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask({ id: taskId });
      const updatedTasks = await getData();
      setTasks(updatedTasks);
      closeModal();
    } catch (error) {
      console.log("Erro ao remover tarefa", error);
    }
  };

  return (
    <S.Container>
      {isEditing ? (
        <>
          <HeaderModal title="Editar tarefa" onPress={closeModal} />
          <S.ContainerInput>
            <Input
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
            />
          </S.ContainerInput>
        </>
      ) : (
        <>
          <HeaderModal title={`Tarefas: ${taskId}`} onPress={closeModal} />
          <S.TitleTask>{taskName}</S.TitleTask>
        </>
      )}

      <S.Buttons>
        {isEditing ? (
          <S.ContainerEditSave>
            <Button text="Salvar" onPress={handlePut} />
          </S.ContainerEditSave>
        ) : (
          <S.ContainerEditSave>
            <Button text="Editar" onPress={() => setIsEditing(true)} />
          </S.ContainerEditSave>
        )}
        <S.ContainerRemove>
          <Button text="Remover" onPress={handleDelete} />
        </S.ContainerRemove>
      </S.Buttons>
    </S.Container>
  );
}
