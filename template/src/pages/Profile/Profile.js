import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import QSeperator from "../../components/QSeperator"

import mapGetters from "../../store/User/getters"
import hst from "../../hst"

import logout from "../../assets/logout.png"
import like from "../../assets/like.png"
import location from "../../assets/location.png"
import shop from "../../assets/shop.png"
import gift from "../../assets/gift.png"

import style from "../../css/style"
import color from "../../css/color"

import notification from "../../assets/bell.png"

export default function Profile({ navigation }) {

    function sendMail() {
        new hst().server.auth.sendEmailVerification();
    }

    function userLogout() {
        new hst().server.auth.logout().then(() => {
            navigation.navigate("SignIn")
        }).catch(err => { console.log(err); })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[{ alignItems: 'center' }]}>
                    <ImageBackground source={{ uri: mapGetters?.getUser()?.photoURL?.replace('localhost', "192.168.1.35") }} resizeMode="cover" imageStyle={[{ borderRadius: 10 }]} style={styles.profileImage} />
                    <Text style={[styles.h3, { fontFamily: "Lato-Bold", marginVertical: 8 }]}>{mapGetters.getUser()?.fullName}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                        <Text style={[styles.h3, { fontFamily: "Lato-Bold", color: color.primary }]}>Profili Düzenle</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ width: '100%' }]}>
                    <Text style={[styles.h3, { fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left", padding: 12 }]}>Kişisel Bilgiler</Text>
                    <QSeperator />
                    <View style={[{ flexDirection: "row", padding: 12 }]}>
                        <Text style={[{ width: 100, fontSize: 14, color: color.primary, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>E Posta</Text>
                        <Text style={[{ fontSize: 14, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>{mapGetters.getUser()?.emailAddress}</Text>
                    </View>
                    <QSeperator />
                    <View style={[{ flexDirection: "row", padding: 12 }]}>
                        <Text style={[{ width: 100, fontSize: 14, color: color.primary, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Telefon</Text>
                        <Text style={[{ fontSize: 14, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>{mapGetters.getUser()?.phone}</Text>
                    </View>
                    <QSeperator />

                    <QSeperator style={[{ marginTop: 20 }]} />
                    <TouchableOpacity style={[{ flexDirection: "row", padding: 12, alignItems: 'center' }]} onPress={() => navigation.push("Address")}>
                        <Image style={[styles.icon, { marginRight: 20 }]} source={location} />
                        <Text style={[{ fontSize: 18, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Adreslerim</Text>
                    </TouchableOpacity>
                    <QSeperator />
                    <TouchableOpacity style={[{ flexDirection: "row", padding: 12, alignItems: 'center' }]}>
                        <Image style={[styles.icon, { marginRight: 20 }]} source={shop} />
                        <Text style={[{ fontSize: 18, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Siparişlerim</Text>
                    </TouchableOpacity>
                    <QSeperator />
                    <TouchableOpacity style={[{ flexDirection: "row", padding: 12, alignItems: 'center' }]}>
                        <Image style={[styles.icon, { marginRight: 20 }]} source={like} />
                        <Text style={[{ fontSize: 18, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Beğendiklerim</Text>
                    </TouchableOpacity>
                    <QSeperator />
                    <TouchableOpacity style={[{ flexDirection: "row", padding: 12, alignItems: 'center' }]}>
                        <Image style={[styles.icon, { marginRight: 20 }]} source={notification} />
                        <Text style={[{ fontSize: 18, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Bildirim Tercihleri</Text>
                    </TouchableOpacity>
                    <QSeperator />
                    <TouchableOpacity style={[{ flexDirection: "row", padding: 12, alignItems: 'center' }]}>
                        <Image style={[styles.icon, { marginRight: 20 }]} source={gift} />
                        <Text style={[{ fontSize: 18, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Arkadaşlarını Davet Et</Text>
                    </TouchableOpacity>
                    <QSeperator />
                    <TouchableOpacity style={[{ flexDirection: "row", padding: 12, alignItems: 'center' }]} onPress={() => userLogout()}>
                        <Image style={[styles.icon, { marginRight: 20 }]} source={logout} />
                        <Text style={[{ fontSize: 18, color: color.fontColor, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Çıkış Yap</Text>
                    </TouchableOpacity>

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
        width: 20,
        height: 20,
        resizeMode: "cover",
        tintColor: color.primary
    }
});
