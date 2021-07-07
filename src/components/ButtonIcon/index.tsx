import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import GoogleImg from '../../assets/g.png';
import { styles } from './styles';

export function ButtonIcon() {
    return (
        <TouchableOpacity style={styles.containers} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                <Image source={GoogleImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                Entrar com o Google
            </Text>
        </TouchableOpacity>
    )
}