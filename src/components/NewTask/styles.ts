import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;
export const Title = styled.Text`
  font-style: ${theme.font.family.subtitle};
  color: ${theme.colors.base.gray500};
  font-size: ${theme.font.size.subtitle};
  line-height: ${theme.font.lineHeight.subtitle};
`;
export const Close = styled.TouchableOpacity``;
export const Form = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
