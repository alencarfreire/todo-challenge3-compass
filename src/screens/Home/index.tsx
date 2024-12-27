import { View, Text, StatusBar } from "react-native";
import React from "react";
import Button from "../../components/Button";
import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import { MagnifyingGlass, SignOut } from "phosphor-react-native";
import Input from "../../components/Input";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const auth = React.useContext(AuthContext);
  return (
    <>
      <StatusBar barStyle={"dark-content"} translucent />
      <S.Container>
        <S.Header>
          <S.ContainerLogout>
            <S.ButtonLogout onPress={auth?.handleLogout}>
              <SignOut size={26} />
            </S.ButtonLogout>
          </S.ContainerLogout>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <S.SearchContainer>
            <Input placeholder="Pesquisar Tarefa" />
            <Button>
              <MagnifyingGlass color="white" />
            </Button>
          </S.SearchContainer>
        </S.Header>
        <S.ContainerInfo>
          <S.ContainerStatus>
            <S.TextStatus>Tarefas Criadas</S.TextStatus>
            <S.Number>16</S.Number>
          </S.ContainerStatus>
          <S.ContainerStatus>
            <S.TextStatus>Concluídas</S.TextStatus>
            <S.Number tasks="done">8</S.Number>
          </S.ContainerStatus>
        </S.ContainerInfo>
      </S.Container>
    </>
  );
}
