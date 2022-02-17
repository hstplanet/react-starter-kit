import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import QSeperator from "../../../components/QSeperator"

import mapGetters from "../../../store/User/getters"

import next from "../../../assets/next.png"
import location from "../../../assets/location.png"
import Add from "../../../assets/add.png"

import style from "../../../css/style"
import color from "../../../css/color"

export default function Address({ navigation }) {

    const user = mapGetters.getUser();
    function getUser() {
       console.log(user);
    }

    return (
        <ScrollView style={[{ flex: 1, backgroundColor: '#fff' }]}>


            <TouchableOpacity style={[styles.row, { width: "100%", padding: 12, justifyContent: "space-between", alignItems: "center" }]} onPress={() => getUser()}>
                <Image source={location} style={styles.icon} tintColor={color.primary} />
                <View style={[{ marginLeft: 20, flexGrow: 1 }]}>
                    <Text style={[{ fontFamily: "Lato-Bold" }]}>Adres Name</Text>
                    <Text style={[{ fontSize: 12, marginTop: 2 }]}>Açıklama</Text>
                </View>
                <Image source={next} style={styles.icon} tintColor={color.fontColor} />
            </TouchableOpacity>
            <QSeperator />

            <View style={[{ alignItems: "center", marginTop: 20 }]}>
                <View style={[{ padding: 12, backgroundColor: color.primary, borderRadius: 50 }]}>
                    <Image source={Add} style={styles.icon} tintColor={color.backgroundColor} />
                </View>
            </View>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    ...style,
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "cover",
        shadowColor: "#000",
        elevation: 2
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "cover",
    }
});
