import React from "react";
import * as S from "./style";
import Circle from "../../assets/circle.svg";
import Trash from "../../assets/trash.svg";
import CircleCheck from "../../assets/check-circle-fill.svg";

type Props = {
  name: string;
  done: boolean;
  onPress: () => void;
};

export default function Task({ name, done, onPress }: Props) {
  return (
    <S.ContainerTask done={done}>
      <S.ContainerLeft>
        <S.CheckBox>{done ? <CircleCheck /> : <Circle />}</S.CheckBox>
        <S.TextTask done={done}>{name}</S.TextTask>
      </S.ContainerLeft>
      <S.CheckTrash onPress={onPress}>
        <Trash />
      </S.CheckTrash>
    </S.ContainerTask>
  );
}
