import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";
import { useAuth } from "../../contexts/auth";

export function Profile() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>

            <Avatar urlImage={user?.picture as string} />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user?.given_name}

                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de economizar água!
                </Text>
            </View>
        </View>
    )
}