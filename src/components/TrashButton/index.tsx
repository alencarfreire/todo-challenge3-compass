import React from "react";
import HeaderModal from "../HeaderModal";
import { useModal } from "../../context/ModalContext";
import * as S from "./styles";
import Button from "../Button";

type Props = {
  taskName: string;
};

export default function TrashButton({ taskName }: Props) {
  const { closeModal } = useModal();
  return (
    <>
      <HeaderModal title="Tarefa : id" onPress={closeModal} />
      <S.TitleTask>{taskName}</S.TitleTask>
      <S.Buttons>
        <Button text="Editar" />
        <Button text="Remover" />
      </S.Buttons>
    </>
  );
}
