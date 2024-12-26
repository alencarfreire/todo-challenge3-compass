import styled from "styled-components/native";
import { theme } from "../../theme/theme";

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

export const Form = styled.View`
  margin-top: 66px;
  padding: 0 24px;
  gap: 15px;
  width: 100%;
`;
export const FormPassword = styled.View`
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;
