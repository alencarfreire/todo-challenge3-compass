import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: () => void;
};

export default function Input({ placeholder, value, onChangeText }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.TextInput
      onChangeText={onChangeText}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      multiline
      value={value}
    />
  );
}
