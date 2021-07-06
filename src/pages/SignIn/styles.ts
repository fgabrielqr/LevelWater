import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.background
    },

    image: {
        width: '100%',
        height: 360,
        justifyContent: "flex-start",
        bottom: 50
    },

    content: {

    },

    title: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 35,
        bottom: 50
    }
});