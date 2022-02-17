import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Notification({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});