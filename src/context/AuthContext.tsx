import React from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: () => void;
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

  const handleLogin = () => {
    console.log("clicou login");
    setIsAuthenticated(true);
  };
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
