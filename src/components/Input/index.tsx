import React, { useState } from "react";
import * as S from "./styles";

type Props = {
  placeholder: string;
};

export default function Input({ placeholder }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.TextInput
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
    />
  );
}
