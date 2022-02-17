
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function NotFound({ navigation }) {

    return (
        <View style={styles.container}>
            <View class="flex flex-center">
                <View>
                    <Text>404 Not Found</Text>
                </View>
                <Button color="red" title="OK Deneme" onPress={() => navigation.navigate("Index")} />
            </View>
            <StatusBar style="auto" />
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
