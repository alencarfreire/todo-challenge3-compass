import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  error?: boolean;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  multiline,
  error,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.TextInput
      onChangeText={onChangeText}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      multiline={multiline}
      value={value}
      secureTextEntry={secureTextEntry}
      error={error}
    />
  );
}
