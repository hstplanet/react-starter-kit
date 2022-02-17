import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import QKeyboardScreen from "../../components/QKeyboardScreen"
import { useDispatch } from 'react-redux'

import mapActions from "../../store/User/actions"

import hst from "../../hst"

import logo from "../../assets/logo.png"
import color from "../../css/color";
import style from "../../css/style";

export default function SignIn({ navigation }) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [disable, onChangeDisable] = React.useState(false);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        new hst().server.auth.onAuthStateChanged().then(res => {
            navigation.navigate("Main")
        }).catch(err => {
            console.log("Login Page");
        });
    }, [])

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function login() {
        if (validateEmail(email.trim())) {
            onChangeDisable(true);
            new hst().server.auth.signInWithEmailAndPassword(email.trim(), password.trim()).then((res) => {
                new hst().server.auth.onAuthStateChanged().then((res) => {
                    dispatch(mapActions.setUser(res));
                    navigation.navigate("Main")
                    onChangeDisable(false);
                    onChangeEmail("");
                    onChangePassword("");
                })
            }).catch((err) => {
                onChangeDisable(false);
                Alert.alert('E Posta veya şifre hatalı', 'Lütfen bilgilerinizi kontrol ederek tekrar deneyin.', [
                    {
                        text: 'Tekrar Dene',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    }
                ]);
            })
        } else {
            Alert.alert('E Posta hatalı', 'Lütfen geçerli bir e posta adresi giriniz.', [
                {
                    text: 'Tekrar Dene',
                    onPress: () => console.log('Cancel Pressed'),
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
                    <Text style={[styles.h1, { fontFamily: 'Lato-Bold', color: color.primary }]}>Giriş Yap</Text>
                    <Text style={styles.herder_title}>Sana özel fırsatlardan yararlanmak için giriş yap</Text>
                    <Text style={styles.q_my_sm}>E Posta</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                    <Text style={styles.q_my_sm}>Şifre</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        secureTextEntry
                        value={password}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
                        <Text style={styles.remember_btn}>Şifreni mi unuttun ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={disable} style={[styles.btn, { backgroundColor: color.primary, marginVertical: 10 }]} onPress={() => login()}>
                        <Text style={styles.confirm_btn}>Giriş Yap</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={disable} style={[styles.btn, { borderColor: "#ccc", borderWidth: 1 }]} onPress={() => navigation.navigate("SignUp")}>
                        <Text style={[{ color: color.primary }]}>Üye Ol</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <Text style={[{ alignItems: "center", fontFamily: "Lato-Regular", marginRight: 5, fontSize: 16 }]}>Üye değil misin?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Reset")}>
                        <Text style={[{ color: color.primary, fontFamily: "Lato-Bold", fontSize: 16 }]}>Üye Ol.</Text>
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
    herder_title: {
        fontSize: 22, marginVertical: 10, fontFamily: 'Lato-Regular'
    },
    q_my_sm: {
        marginVertical: 4
    },
    remember_btn: {
        textAlign: 'right', fontWeight: "bold", color: "#333", marginTop: 10
    },
    confirm_btn: {
        color: "#fff"
    }
});
