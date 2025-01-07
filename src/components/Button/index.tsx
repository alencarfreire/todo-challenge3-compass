import React from "react";
import * as S from "./styles";

type Props = {
  text?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: "Authentication" | "home";
  padding?: string;
};

export default function Button({
  text,
  children,
  onPress,
  variant,
  padding,
}: Props) {
  return (
    <>
      <S.Button onPress={onPress} padding={padding} testID="button-component">
        {text && <S.ButtonText variant={variant}>{text}</S.ButtonText>}
        {children}
      </S.Button>
    </>
  );
}
