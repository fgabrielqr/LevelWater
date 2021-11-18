import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { secondary30, secondary50 } = theme.color;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary30, secondary50]}
    >
      {children}
    </LinearGradient>
  );
}
