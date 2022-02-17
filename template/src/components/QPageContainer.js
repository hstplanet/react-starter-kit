import { StyleSheet, View } from 'react-native';

export default function QPageContainer({ children, style }) {

    return (
        <View style={[styles.container, style, { paddingBottom: 15 }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({

});