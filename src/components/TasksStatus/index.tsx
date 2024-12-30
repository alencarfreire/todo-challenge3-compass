import React from "react";
import * as S from "./styles";

type Props = {
  created: string;
  done: string;
};

export default function TasksStatus({ created, done }: Props) {
  return (
    <S.ContainerInfo>
      <S.ContainerStatus>
        <S.TextStatus>Tarefas Criadas</S.TextStatus>
        <S.Number>{created}</S.Number>
      </S.ContainerStatus>
      <S.ContainerStatus>
        <S.TextStatus>Concluídas</S.TextStatus>
        <S.Number tasks="done">{done}</S.Number>
      </S.ContainerStatus>
    </S.ContainerInfo>
  );
}
