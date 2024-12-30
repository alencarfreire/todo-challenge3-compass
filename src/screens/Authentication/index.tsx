import React, { useContext } from "react";
import * as S from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../context/AuthContext";
import Eye from "../../assets/eye.svg";
import EyeSlash from "../../assets/eye-slash.svg";

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
        <S.FormUsername>
          <Input placeholder="Username" />
        </S.FormUsername>
        <S.FormPassword>
          <Input placeholder="Password" />
          <Button onPress={handleViewPassword} padding="15px 20px">
            {viewPassword ? (
              <EyeSlash fill={"#fff"} width={20} />
            ) : (
              <Eye fill={"#fff"} width={20} />
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
