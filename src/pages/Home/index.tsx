import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import { ButtonLogout } from "../../components/ButtonLogout";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import ProgressCircle from 'react-native-progress-circle';
import api from '../../services/api-mqtt';

//{ last_level: number, date: Date }

export function Home() {
    const [progress, setProgress] = useState(0);
    const [date, setDate] = useState<Date | null>(null);

    useEffect( () => {
        searchData();

        setInterval(searchData, 10000)
    }, []);

    function searchData() {
        api.get('/').then(({ data }) => {
            setProgress(data.last_level);
            setDate(data.date);
        }).catch((err) => {
            console.log(err)
        });
    }

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
                    percent={progress}
                    radius={125}
                    borderWidth={20}
                    color= "#495BCC"
                    shadowColor="#999"
                    bgColor="#DFE9F5"
                >
                    <Text style={{ fontSize: 50, color: '#363636' }}>{progress+'%'}</Text>
                </ProgressCircle>
            </View>
        </View>
    );
}