import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  gap: 16px;
  border-top-width: 1px;
  border-top-color: ${theme.colors.base.gray300};
`;

export const Title = styled.Text`
  font-family: ${theme.font.family.subtitle};
  color: ${theme.colors.base.gray500};
  font-size: ${theme.font.size.subtitle};
  line-height: ${theme.font.lineHeight.subtitle};
`;

export const ContainerText = styled.View``;

export const Subtitle = styled.Text`
  font-family: ${theme.font.family.textMd};
  color: ${theme.colors.base.gray500};
  font-size: ${theme.font.size.textMd};
  line-height: ${theme.font.lineHeight.textMd};
  text-align: center;
`;
