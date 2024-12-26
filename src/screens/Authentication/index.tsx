import React, { useContext } from "react";
import * as S from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Icon from "phosphor-react-native";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../context/AuthContext";

export default function Authentication() {
  const [viewPassword, setViewPassword] = React.useState(false);
  const auth = useContext(AuthContext);

  function handleViewPassword() {
    setViewPassword(!viewPassword);
  }

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <Input placeholder="Username" />
        <S.FormPassword>
          <Input placeholder="Password" />
          <Button onPress={handleViewPassword}>
            {viewPassword ? (
              <Icon.EyeSlash color="white" size={20} weight="bold" />
            ) : (
              <Icon.Eye color="white" size={20} weight="bold" />
            )}
          </Button>
        </S.FormPassword>
        <Button
          text="Login"
          variant="Authentication"
          onPress={auth?.handleLogin}
        />
      </S.Form>
    </S.Container>
  );
}
