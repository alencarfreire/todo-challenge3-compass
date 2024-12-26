import React from "react";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function AuthConsumer() {
  const auth = React.useContext(AuthContext);

  if (!auth) return null;

  return auth.isAuthenticated ? <AppStack /> : <AuthStack />;
}
