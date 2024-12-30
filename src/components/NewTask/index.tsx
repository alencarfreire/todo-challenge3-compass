import React from "react";
import * as S from "./styles";
import CloseIcon from "../../assets/close.svg";
import Input from "../Input";
import Button from "../Button";
import CirclePlus from "../../assets/plus-circle-regular.svg";

export default function NewTask() {
  return (
    <>
      <S.Header>
        <S.Title>Nova tarefa</S.Title>
        <S.Close>
          <CloseIcon />
        </S.Close>
      </S.Header>
      <S.Form>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button>
          <CirclePlus />
        </Button>
      </S.Form>
    </>
  );
}
