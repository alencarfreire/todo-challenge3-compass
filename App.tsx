import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import AuthConsumer from "./src/routes/AuthConsumer";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <StatusBar style="auto" />
            <AuthConsumer />
          </ThemeProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
