import styled from "styled-components/native";
import { theme } from "../../theme/theme";
import EyeSlash from "../../assets/eye-slash.svg";

export const EyeSlashIcon = styled(EyeSlash)`
  color: white;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.base.gray100};
`;

export const Title = styled.Text`
  color: ${theme.colors.base.gray600};
  font-family: ${theme.font.family.input};
`;

export const Form = styled.View``;

export const FormUsername = styled.View`
  flex-direction: row;
`;

export const FormPassword = styled.View`
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;
