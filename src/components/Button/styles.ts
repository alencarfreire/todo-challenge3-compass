import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.main.purpleDark};
  padding: 21px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.base.gray100};
  line-height: ${theme.font.lineHeight.button};
  font-size: ${({ variant }: { variant: string }) =>
    variant === "Authentication"
      ? theme.font.size.input
      : theme.font.size.button};
  font-family: ${({ variant }: { variant: string }) =>
    variant === "Authentication"
      ? theme.font.family.input
      : theme.font.family.button};
`;
