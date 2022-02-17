import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import QDrawerMenu from "./QDrawerMenu"
import color from "../css/color"
{{#if preset.loginsystem}}
import mapGetters from "../store/User/getters"
{{/if}}
import logout from '../assets/logout.png';

export default function QDrawer({ navigation, children, setShowMenu }) {

    const [currentTab, setCurrentTab] = useState("Home");


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.qdrawer}>
                {{#if preset.loginsystem}}
                <Image source={[{ uri: mapGetters?.getUser().photoURL.replace('localhost', "192.168.1.35") }]} style={styles.image} />
                <Text style={styles.userName}>{mapGetters?.getUser()?.fullName}</Text>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Profile");
                    setShowMenu(true)
                }}>
                    <Text style={styles.profileBtn}>Profilim</Text>
                </TouchableOpacity>
                {{/if}}
                <View style={styles.btnArea}>
                    {
                        children.map((child) => {
                            if (child != null) {
                                return React.cloneElement(child, { currentTab: currentTab, setCurrentTab: setCurrentTab, navigation: navigation, setShowMenu: setShowMenu })
                            }
                        })
                    }
                </View>
                {{#if preset.loginsystem}}
                <View>
                    <QDrawerMenu currentTab={currentTab} setCurrentTab={setCurrentTab} title="Çıkış Yap" image={logout} navigation={navigation} to="Login" setShowMenu={setShowMenu} />
                </View>
                {{/if}}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        flex: 1,
        backgroundColor: color.primary,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    {{#if preset.loginsystem}}image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginTop: 8
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20
    },
    profileBtn: {
        marginTop: 6,
        color: 'white'
    },{{/if}}
    btnArea: {
        flexGrow: 1, marginTop: 20
    },
    qdrawer: {
        justifyContent: 'flex-start',
        paddingVertical: 35,
        paddingHorizontal: 15
    }
});