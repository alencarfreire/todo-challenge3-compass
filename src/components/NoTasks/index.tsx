import React from "react";
import * as S from "./styles";
import ClipboardText from "../../assets/clipboard-text.svg";

export default function NoTasks() {
  return (
    <>
      <S.Container>
        <ClipboardText />
        <S.ContainerText>
          <S.Title>Você ainda não tem tarefas cadastradas</S.Title>
          <S.Subtitle>Crie tarefas e organize seus itens a fazer</S.Subtitle>
        </S.ContainerText>
      </S.Container>
    </>
  );
}
