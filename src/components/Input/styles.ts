import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: theme.colors.base.gray500,
}))`
  background-color: ${theme.colors.base.gray100};
  flex: 1;
  padding: 18px;
  border: 2px solid;
  border-radius: 8px;
  font-family: ${theme.font.family.input};
  font-size: ${theme.font.size.input};
  line-height: ${theme.font.lineHeight.input};
  border-color: ${(props: { isFocused: boolean }) =>
    props.isFocused ? theme.colors.main.purpleBase : theme.colors.base.gray300};
`;
