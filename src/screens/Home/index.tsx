import { View, Text, StatusBar } from "react-native";
import React from "react";
import Button from "../../components/Button";
import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { AuthContext } from "../../context/AuthContext";
import SignOut from "../../assets/sign-out.svg";
import MagnifyingGlass from "../../assets/magnifying-glass.svg";
import PlusCircle from "../../assets/plus-circle-regular.svg";
import Task from "../../components/Task";
import TaskList from "../../components/TaskList";
import { DataProvider } from "../../context/DataContext";

export default function Home() {
  const auth = React.useContext(AuthContext);
  return (
    <>
      <StatusBar barStyle={"dark-content"} translucent />
      <S.Container>
        <S.Header>
          <S.ContainerLogout>
            <S.ButtonLogout onPress={auth?.handleLogout}>
              <SignOut width={26} />
            </S.ButtonLogout>
          </S.ContainerLogout>
          <S.LogoContainer>
            <Logo />
          </S.LogoContainer>
          <S.SearchContainer>
            <Input placeholder="Pesquisar Tarefa" />
            <Button>
              <MagnifyingGlass width={23} fill="white" />
            </Button>
          </S.SearchContainer>
        </S.Header>
        <DataProvider>
          <S.ContainerTasks>
            <TaskList />
          </S.ContainerTasks>
        </DataProvider>
        <S.ContainerNewTask>
          <Button text="Criar">
            <PlusCircle />
          </Button>
        </S.ContainerNewTask>
      </S.Container>
    </>
  );
}
