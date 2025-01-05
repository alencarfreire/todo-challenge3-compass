import React from "react";
import * as S from "./style";
import Circle from "../../assets/circle.svg";
import Trash from "../../assets/trash.svg";
import CircleCheck from "../../assets/check-circle-fill.svg";
import { useModal } from "../../context/ModalContext";
import TrashButton from "../TrashButton";

type Props = {
  tarefa: string;
  status: boolean;
};

export default function Task({ tarefa, status }: Props) {
  const { openModal } = useModal();
  return (
    <S.ContainerTask done={status}>
      <S.ContainerLeft>
        <S.CheckBox>{status ? <CircleCheck /> : <Circle />}</S.CheckBox>
        <S.TextTask done={status}>{tarefa}</S.TextTask>
      </S.ContainerLeft>
      <S.CheckTrash
        onPress={() => openModal(<TrashButton taskName={tarefa} />)}
      >
        <Trash />
      </S.CheckTrash>
    </S.ContainerTask>
  );
}
