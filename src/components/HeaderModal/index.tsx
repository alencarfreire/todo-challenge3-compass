import React from "react";
import * as S from "./styles";
import CloseIcon from "../../assets/close.svg";

type Props = {
  title: string;
  onPress: () => void;
};

export default function HeaderModal({ title, onPress }: Props) {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.Close onPress={onPress}>
        <CloseIcon />
      </S.Close>
    </S.Header>
  );
}
