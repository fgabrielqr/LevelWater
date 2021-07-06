import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';
import CaixaImg from '../../assets/caixa.png';

export function SignIn() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Image source={CaixaImg} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Faça o login para {`\n`}
                    ver o nível da sua {`\n`}
                    caixa d'água
                </Text>
            </View>




        </View>
    );
}
