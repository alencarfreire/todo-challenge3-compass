import React, { useContext } from "react";
import * as S from "./styles";

import Input from "../Input";
import Button from "../Button";
import CirclePlus from "../../assets/plus-circle-regular.svg";
import HeaderModal from "../HeaderModal";
import { useModal } from "../../context/ModalContext";

export default function NewTask() {
  const { closeModal } = useModal();
  return (
    <>
      <HeaderModal title="Nova Tarefa" onPress={closeModal} />
      <S.Form>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button>
          <CirclePlus />
        </Button>
      </S.Form>
    </>
  );
}
