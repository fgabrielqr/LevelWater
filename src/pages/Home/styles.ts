import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  progress: {
    top: "30%",
    alignItems: "center",
    alignContent: "center",
  },
  center: {
    top: "20%",
    alignItems: "center",
    alignContent: "center",
  },
  texto: {
    fontSize: 40,
    fontFamily: theme.fonts.title500,
    color: theme.color.heading,
  },
});
