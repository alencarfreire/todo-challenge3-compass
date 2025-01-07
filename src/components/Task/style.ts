import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const ContainerTask = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid;
  border-color: ${theme.colors.base.gray400};
  border-radius: 8px;
  background-color: ${({ done }: { done: boolean }) =>
    done ? theme.colors.base.gray100 : theme.colors.base.gray300};
  min-height: 78px;
  margin-bottom: 12px;
`;

export const ContainerLeft = styled.View`
  flex-direction: row;
  gap: 8px;
  flex: 1;
  margin-right: 8px;
  align-items: start;
`;
export const CheckBox = styled.TouchableOpacity``;

export const TextTask = styled.Text`
  font-family: ${theme.font.family.textSm};
  font-size: ${theme.font.size.textSm};
  line-height: ${theme.font.lineHeight.textSm};
  color: ${theme.colors.base.gray600};
  max-width: 250px;
  text-decoration: ${({ done }: { done: boolean }) =>
    done && theme.font.decoration.done};
`;

export const CheckTrash = styled.TouchableOpacity``;
