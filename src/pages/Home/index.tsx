import React from "react";
import { View, Text } from "react-native";
import { ButtonLogout } from "../../components/ButtonLogout";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import ProgressCircle from 'react-native-progress-circle';

export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonLogout />
            </View>

            <View style={styles.center}>
                <Text style={styles.texto}>Nível do reservatório</Text>
            </View>

            <View style={styles.progress}>
                <ProgressCircle
                    percent={100}
                    radius={125}
                    borderWidth={15}
                    color= "#495BCC"
                    shadowColor="#999"
                    bgColor="#DFE9F5"
                >
                    <Text style={{ fontSize: 50 }}>{'100%'}</Text>
                </ProgressCircle>
            </View>
        </View>
    );
}