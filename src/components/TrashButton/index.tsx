import React, { useContext, useState } from "react";
import HeaderModal from "../HeaderModal";
import { useModal } from "../../context/ModalContext";
import * as S from "./styles";
import Button from "../Button";
import Input from "../Input";

type Props = {
  taskName: string;
};

export default function TrashButton({ taskName }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(taskName);
  const { closeModal } = useModal();
  return (
    <S.Container>
      {isEditing ? (
        <>
          <HeaderModal title="Editar tarefa" onPress={closeModal} />
          <S.ContainerInput>
            <Input value={editedName} />
          </S.ContainerInput>
        </>
      ) : (
        <>
          <HeaderModal title="Tarefa : Id" onPress={closeModal} />
          <S.TitleTask>{taskName}</S.TitleTask>
        </>
      )}

      <S.Buttons>
        {isEditing ? (
          <S.ContainerEditSave>
            <Button text="Salvar" />
          </S.ContainerEditSave>
        ) : (
          <S.ContainerEditSave>
            <Button text="Editar" onPress={() => setIsEditing(true)} />
          </S.ContainerEditSave>
        )}
        <S.ContainerRemove>
          <Button text="Remover" />
        </S.ContainerRemove>
      </S.Buttons>
    </S.Container>
  );
}
