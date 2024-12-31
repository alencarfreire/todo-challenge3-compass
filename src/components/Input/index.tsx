import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  placeholder?: string;
  value?: string;
};

export default function Input({ placeholder, value }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.TextInput
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      multiline
      value={value}
    />
  );
}
