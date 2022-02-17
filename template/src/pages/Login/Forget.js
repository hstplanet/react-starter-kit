import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import QKeyboardScreen from "../../components/QKeyboardScreen"
import hst from "../../hst"

import logo from "../../assets/logo.png"
import color from "../../css/color";
import style from "../../css/style";

export default function SignIn({ navigation }) {
    const [email, onChangeEmail] = React.useState("");

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function resetPassword() {
        if (validateEmail(email.trim())) {
            if (email.length > 0) {
                new hst().server.auth.resetPassword(email.trim()).then(() => {
                    navigation.navigate("Reset")
                }).catch(() => {
                    Alert.alert('Bir sorun oluştu.', 'E posta adresinizi kontrol ediniz.', [
                        {
                            text: 'Tekrar Dene',
                            style: 'cancel',
                        }
                    ]);
                })
            } else {
                Alert.alert('Uyarı', 'E posta adresinizi giriniz.', [
                    {
                        text: 'Tekrar Dene',
                        style: 'cancel',
                    }
                ]);
            }
        } else {
            Alert.alert('Uyarı', 'Lütfen geçerli bir e posta adresi giriniz.', [
                {
                    text: 'Tekrar Dene',
                    style: 'cancel',
                }
            ]);
        }
    }

    return (
        <QKeyboardScreen>
            <View style={[styles.container, { justifyContent: "space-between" }]}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.innerContainer}>
                    <Text style={[styles.h1, { fontFamily: 'Lato-Regular' }]}>Şifremi Unuttum</Text>
                    <Text style={{ fontSize: 22, marginVertical: 10, fontFamily: 'Lato-Regular' }}>Şifreni sıfırmalan için sana bir e posta göndereceğiz.</Text>
                    <Text style={{ marginVertical: 4 }}>E Posta</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                    <TouchableOpacity style={[styles.btn, { backgroundColor: color.primary, marginVertical: 10 }]} onPress={() => resetPassword()}>
                        <Text style={{ color: "#fff" }}>Gönder</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <Text style={{ alignItems: "center", fontFamily: "Lato-Regular", marginRight: 5, fontSize: 16 }}>Üye değil misin?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{ color: color.primary, fontFamily: "Lato-Bold", fontSize: 16 }}>Üye Ol.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </QKeyboardScreen>
    )
}

const styles = StyleSheet.create({
    ...style,
    logo: {
        width: 80,
        resizeMode: 'contain'
    },
});
