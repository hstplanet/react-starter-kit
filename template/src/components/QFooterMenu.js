import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import color from "../css/color"

export default function QFooterMenu({ currentTab, title, image, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.content}>
                <Image source={image} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor: currentTab == title ? color.primary : 'transparent',
        borderRadius: 8,
    },
    icon: {
        width: 18, height: 18,
        tintColor: !currentTab == title ? color.primary : "white"
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: !currentTab == title ? color.primary : "white"
    }
});