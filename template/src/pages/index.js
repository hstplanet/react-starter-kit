import React from "react";
import { StyleSheet, View, Text{{#if preset.loginsystem}}, Alert {{/if_eq}} } from 'react-native';
import hst from "../hst"
export default function Index({ navigation }) {

    {{#if preset.loginsystem}}
    React.useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Alert.alert(
                'Oturumunuz Kapatılsın mı ?',
                'Açmış olduğunuz oturum siz kapatana kadar açık kalacaktır. Geri gitmek isterseniz sizin için oturumu kapatabiliriz.',
                [
                    {
                        text: 'Kapat',
                        style: 'destructive',
                        onPress: () => {
                            new hst().server.auth.logout().then(res => {
                                navigation.dispatch(e.data.action)
                            })
                        },
                    },
                    { text: "İptal", style: 'cancel', onPress: () => { } },
                ]
            );
        })
    }, [])
    {{/if_eq}}

    return (

        <View style={styles.container}>
            <Text>Index</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
