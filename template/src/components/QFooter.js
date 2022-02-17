import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

export default function QFooter({ children }) {

    const [currentTab, setCurrentTab] = useState("Home");

    return (
        <View style={styles.footer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: 60,
    },
});