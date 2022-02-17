import { StyleSheet, View, Text } from 'react-native';

export default function QSeperator({ style }) {

    return (
        <View style={[styles.seperator , style]}>
            <Text>adssadasd</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    seperator: {
        height: StyleSheet.hairlineWidth,
        width: "100%",
        backgroundColor: "#ccc"
    },
});