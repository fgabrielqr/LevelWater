import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import GoogleImg from '../../assets/g.png';
import { styles } from './styles';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export function ButtonIcon() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '590626881314-hk20ut8a2g7m8a888c3urrn1354crr6f.apps.googleusercontent.com',
       // iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
       // androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        
      });
    return (
        <TouchableOpacity  onPress={() => promptAsync()} style={styles.containers} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                <Image source={GoogleImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                Entrar com o Google
            </Text>
        </TouchableOpacity>
    )
}