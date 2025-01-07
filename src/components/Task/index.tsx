import React, { useContext } from "react";
import * as S from "./style";
import Circle from "../../assets/circle.svg";
import Trash from "../../assets/trash.svg";
import CircleCheck from "../../assets/check-circle-fill.svg";
import { useModal } from "../../context/ModalContext";
import TrashButton from "../TrashButton";
import { DataContext } from "../../context/DataContext";

type Props = {
  tarefa: string;
  status: boolean;
  id: number;
};

export default function Task({ tarefa, status, id }: Props) {
  const { openModal } = useModal();
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error("DataContext não carregou");
  }

  const { putTask, getData } = dataContext;

  const handlePut = async () => {
    try {
      await putTask({ name: tarefa, id: id, status: !status });
      await getData();
    } catch (error) {
      console.log("Erro ao atualizar tarefa", error);
    }
  };

  return (
    <S.ContainerTask done={status}>
      <S.ContainerLeft>
        <S.CheckBox onPress={() => handlePut()}>
          {status ? <CircleCheck /> : <Circle />}
        </S.CheckBox>
        <S.TextTask done={status}>{tarefa}</S.TextTask>
      </S.ContainerLeft>
      <S.CheckTrash
        onPress={() =>
          openModal(
            <TrashButton taskName={tarefa} taskId={id} taskStatus={status} />
          )
        }
      >
        <Trash />
      </S.CheckTrash>
    </S.ContainerTask>
  );
}
