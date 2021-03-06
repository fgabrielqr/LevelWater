import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useAuth } from "../../contexts/auth";

export function ButtonLogout({ ...rest }: RectButtonProps) {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <RectButton
      onPress={() => handleSignOut()}
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons name="logout" color={"#fff"} size={24} />
    </RectButton>
  );
}
