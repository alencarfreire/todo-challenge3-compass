import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const ContainerInfo = styled.View`
  flex-direction: row;
  margin: 60px 0px 8px 0px;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const ContainerStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const TextStatus = styled.Text`
  font-family: ${theme.font.family.subtitle};
  color: ${theme.colors.base.gray500};
  font-size: ${theme.font.size.subtitle};
  line-height: ${theme.font.lineHeight.subtitle};
`;

export const Number = styled.Text`
  background-color: ${(props: { tasks: string }) =>
    props.tasks === "done"
      ? theme.colors.main.greenLight
      : theme.colors.main.purpleLight};
  font-family: ${theme.font.family.tag};
  font-size: ${theme.font.size.tag};
  line-height: ${theme.font.lineHeight.tag};
  color: ${(props: { tasks: string }) =>
    props.tasks === "done"
      ? theme.colors.main.greenDark
      : theme.colors.main.purpleDark};
  padding: 4px 8px;
  border-radius: 999px;
`;
