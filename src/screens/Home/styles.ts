import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.base.gray100};
`;

export const Header = styled.View`
  background-color: ${theme.colors.base.gray300};
  height: 180px;
`;

export const ContainerLogout = styled.View`
  align-items: flex-end;
`;
export const ButtonLogout = styled.TouchableOpacity`
  margin-top: 51px;
  margin-right: 20px;
`;

export const LogoContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  margin: 0 24px;
  margin-top: 65px;
  gap: 8px;
  justify-content: center;
`;

export const ContainerTasks = styled.View`
  flex: 1;
  margin: 8px 26px;
`;

export const ContainerNewTask = styled.View`
  align-self: flex-end;
  margin: 0 24px 61px 0;
`;

export const ScrollView = styled.ScrollView``;
