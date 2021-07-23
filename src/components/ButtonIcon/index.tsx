import React, { useEffect } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import GoogleImg from '../../assets/g.png';
import { styles } from './styles';
import * as WebBrowser from 'expo-web-browser';
import { useAuth } from '../../contexts/auth';

WebBrowser.maybeCompleteAuthSession();

export function ButtonIcon() {
    const { signIn } = useAuth();

    const [, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '590626881314-kf4ac5rc2nqlh3p1cfp4f6baca1imu9j.apps.googleusercontent.com',
        androidClientId: '590626881314-nqp8krl3dioj9v3alc0s3ub73187d555.apps.googleusercontent.com',
        // iosClientId: '590626881314-6j4r7u62faefsg63e4sle0oomjqq8uk5.apps.googleusercontent.com',
    });

    async function pegarDadosDoUsuario() {
        try {
            if (response?.type === 'success') {
                const { authentication } = response;
                if (authentication) {
                    const apiResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + authentication.accessToken)
                    const userData = await apiResponse.json()
                    signIn(userData)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        pegarDadosDoUsuario()
    }, [response])

    return (
        <TouchableOpacity onPress={() => promptAsync()} style={styles.containers} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                <Image source={GoogleImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                Entrar com o Google
            </Text>
        </TouchableOpacity>
    )
}