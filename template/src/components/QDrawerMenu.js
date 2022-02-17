import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import mapActions from "../store/User/actions"
import { useDispatch } from 'react-redux'

import color from "../css/color"
import hst from "../hst"

export default function QDrawerMenu({ currentTab, setCurrentTab, title, image, navigation, to, setShowMenu }) {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => {
            if (title == "Çıkış Yap") {
                new hst().server.auth.logout().then(() => {
                    setShowMenu(true)
                    navigation.push("Login")
                    dispatch(mapActions.setLogout());
                }).catch(() => {
                    console.log("Not Logout");
                })
            } else {
                setCurrentTab(title)
                navigation.navigate(to)
                setShowMenu(true)
            }
        }}>
            <View style={styles.content}>
                <Image source={image} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
    },
    icon: {
        width: 25, height: 25,
        tintColor: currentTab == title ? color.primary : "white"
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 15,
        color: currentTab == title ? color.primary : "white"
    }
});