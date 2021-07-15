import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';
import CaixaImg from '../../assets/caixa.png';

export function SignIn() {
    return (
        <View style={styles.container}>
            <Image source={CaixaImg} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Faça o login para {`\n`}
                    verificar o nível {`\n`}
                    da caixa d'água
                </Text>
                    <ButtonIcon  />
            </View>
        </View>
    );
}
