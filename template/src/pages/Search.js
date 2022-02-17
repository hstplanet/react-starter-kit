import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Search({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Search</Text>
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
