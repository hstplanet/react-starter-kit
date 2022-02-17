import { StyleSheet, View } from 'react-native';
//import { BlurView } from 'expo-blur';

export default function QHeader({ children, style }) {

    return (
        <View intensity={100} style={[styles.header, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 90,
        alignItems: "flex-end"
    },
});