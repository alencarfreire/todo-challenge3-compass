import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import Button from "../../components/Button";
import * as S from "./styles";
import Logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { AuthContext } from "../../context/AuthContext";
import SignOut from "../../assets/sign-out.svg";
import MagnifyingGlass from "../../assets/magnifying-glass.svg";
import PlusCircle from "../../assets/plus-circle-regular.svg";
import TaskList from "../../components/TaskList";
import { DataContext, DataProvider } from "../../context/DataContext";
import { CustomModal } from "../../components/CustomModal";
import NewTask from "../../components/NewTask";
import { useModal } from "../../context/ModalContext";

interface TaskProps {
  tarefa: string;
  status: boolean;
  id: number;
}

export default function Home() {
  const [tasks, setTasks] = React.useState<TaskProps[]>([]);
  const dataContext = React.useContext(DataContext);
  const auth = React.useContext(AuthContext);
  const { openModal } = useModal();

  if (!dataContext) {
    throw new Error("error");
  }

  const { getData } = dataContext;

  useEffect(() => {
    const loadTasks = async () => {
      const attData = await getData();
      setTasks(attData);
    };
    loadTasks();
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
    // return () => clearTimeout(timer);
  }, []);

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
            <Button padding="14px 20px">
              <MagnifyingGlass width={23} fill="white" />
            </Button>
          </S.SearchContainer>
        </S.Header>
        <DataProvider>
          <S.ContainerTasks>
            <TaskList tasks={tasks} setTasks={setTasks} />
          </S.ContainerTasks>
        </DataProvider>
        <S.ContainerNewTask>
          <Button
            padding="16px 24px"
            text="Criar"
            onPress={() => openModal(<NewTask setTasks={setTasks} />)}
          >
            <PlusCircle />
          </Button>
        </S.ContainerNewTask>
      </S.Container>
      <CustomModal />
    </>
  );
}
