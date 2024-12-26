import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authentication from "../screens/Authentication";
import { AuthStackParamList } from "../@types/navigation";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authentication" component={Authentication} />
    </Stack.Navigator>
  );
}
