import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View``;

export const TitleTask = styled.Text`
  font-family: ${theme.font.family.textSm};
  font-size: ${theme.font.size.textSm};
  line-height: ${theme.font.lineHeight.textSm};
  color: ${theme.colors.base.gray600};
  margin-top: 16px;
`;
export const Buttons = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`;

export const ContainerInput = styled.View`
  height: 80px;
`;
