import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary20 } = theme.color;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary20]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
