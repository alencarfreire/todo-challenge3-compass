import { View, Text } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 16 }}>
      <Button text="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
