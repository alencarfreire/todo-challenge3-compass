import React from "react";
import * as S from "./style";
import Circle from "../../assets/circle.svg";
import Trash from "../../assets/trash.svg";
import CircleCheck from "../../assets/check-circle-fill.svg";
import { useModal } from "../../context/ModalContext";
import TrashButton from "../TrashButton";

type Props = {
  name: string;
  done: boolean;
};

export default function Task({ name, done }: Props) {
  const { openModal } = useModal();
  return (
    <S.ContainerTask done={done}>
      <S.ContainerLeft>
        <S.CheckBox>{done ? <CircleCheck /> : <Circle />}</S.CheckBox>
        <S.TextTask done={done}>{name}</S.TextTask>
      </S.ContainerLeft>
      <S.CheckTrash onPress={() => openModal(<TrashButton taskName={name} />)}>
        <Trash />
      </S.CheckTrash>
    </S.ContainerTask>
  );
}
