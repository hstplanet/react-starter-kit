import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import QKeyboardScreen from "../../components/QKeyboardScreen"
import hst from "../../hst"

import logo from "../../assets/logo.png"
import color from "../../css/color";
import style from "../../css/style";

export default function SignIn({ route, navigation }) {
    const { token } = route.params;
    const [password, onChangePassword] = React.useState("");
    const [confirm_password, onChangeConfirm] = React.useState("");

    function resetPassword() {
        if (password.trim().length > 0 && confirm_password.trim().length > 0) {
            if (password.trim() === confirm_password.trim()) {
                new hst().server.auth.sendNewPassword(token, password.trim()).then(res => {
                    navigation.navigate("SignIn")
                }).catch(err => {
                    Alert.alert('Uyarı', 'Bir hata oluştu lütfen tekrar deneyin.', [
                        {
                            text: 'Tekrar Dene',
                            style: 'cancel',
                        }
                    ]);
                })
            } else {
                Alert.alert('Uyarı', 'Şifreleriniz bir biri ile eşleşmiyor.', [
                    {
                        text: 'Tekrar Dene',
                        style: 'cancel',
                    }
                ]);
            }
        } else {
            Alert.alert('Uyarı', 'Yeni şifrelerinizi belirleyiniz.', [
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
                    <Text style={[styles.h1, { fontFamily: 'Lato-Bold' }]}>Şifreni Sıfırla</Text>
                    <Text style={styles.header_title}>Yeni şifrenizi girerek onaylayınız.</Text>
                    <Text style={q_mt_sm}>Şifre</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        secureTextEntry
                        value={password}
                    />
                    <Text style={styles.q_mt_sm}>Onay</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeConfirm}
                        secureTextEntry
                        value={confirm_password}
                    />

                    <TouchableOpacity style={[styles.btn, { backgroundColor: color.primary, marginVertical: 10 }]} onPress={() => resetPassword()}>
                        <Text style={styles.confirm}>Şifremi Değiştir</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>

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
    header_title: {
        fontSize: 22, marginVertical: 10, fontFamily: 'Lato-Regular'
    },
    q_mt_sm: {
        marginVertical: 4
    },
    confirm: {
        color: "#fff"
    }
});
