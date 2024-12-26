import React from "react";
import * as S from "./styles";

type Props = {
  text?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: "Authentication" | "home";
};

export default function Button({ text, children, onPress, variant }: Props) {
  return (
    <>
      <S.Button onPress={onPress}>
        {text && <S.ButtonText variant={variant}>{text}</S.ButtonText>}
        {children}
      </S.Button>
    </>
  );
}
