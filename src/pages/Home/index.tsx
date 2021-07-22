import React from "react";
import { View } from "react-native";
import { ButtonLogout } from "../../components/ButtonLogout";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonLogout />
            </View>
        </View>
    );
}