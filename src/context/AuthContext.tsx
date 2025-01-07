import React from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  isAuthenticated: boolean;
  errorLogin: boolean;
  handleLogin: (credentions: { username: string; password: string }) => void;
  handleLogout: () => void;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [errorLogin, setErrorLogin] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function checkLogin() {
      await haveAuth();
      AsyncStorage.clear();
    }
    checkLogin();
  }, []);

  const haveAuth = async () => {
    try {
      const authStorage = await AsyncStorage.getItem("@auth");
      if (authStorage) {
        api.defaults.headers.common["Authorization"] = authStorage;
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await api.post("/login", {
        username: username,
        password: password,
      });

      const { accessToken } = response.data;

      if (accessToken) {
        const bToken = `Bearer ${accessToken}`;
        api.defaults.headers.common["Authorization"] = bToken;
        AsyncStorage.setItem("@auth", bToken);
        console.log(bToken);
        setIsAuthenticated(true);
        setErrorLogin(false);
      }

      console.log("Clicou login e foi", response);
    } catch (error) {
      setErrorLogin(true);
      console.log("Não logou", error);
    }
  };
  const handleLogout = () => {
    console.log("cliclou logout");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogin, handleLogout, errorLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
