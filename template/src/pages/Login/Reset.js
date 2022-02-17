import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import QKeyboardScreen from "../../components/QKeyboardScreen"
import { MaskedTextInput } from "react-native-mask-text";

import hst from "../../hst"

import logo from "../../assets/logo.png"
import color from "../../css/color";
import style from "../../css/style";

export default function SignIn({ navigation }) {
    const [key_1, onChangeKey_1] = React.useState("");
    const [key_2, onChangeKey_2] = React.useState("");
    const [key_3, onChangeKey_3] = React.useState("");
    const [key_4, onChangeKey_4] = React.useState("");
    const [key_5, onChangeKey_5] = React.useState("");

    const ref_input1 = React.useRef();
    const ref_input2 = React.useRef();
    const ref_input3 = React.useRef();
    const ref_input4 = React.useRef();
    const ref_input5 = React.useRef();

    function confirmKey() {
        let token = key_1 + key_2 + key_3 + key_4 + key_5;
        if (token.length == 5) {
            new hst().server.auth.controlKey(token).then(res => {
                navigation.push("ResetPassword", {
                    token: token
                })
            }).catch(err => {
                Alert.alert('Uyarı', 'Onaylama anahtarınızda sorun var ?', [
                    {
                        text: 'Tekrar Dene',
                        style: 'cancel',
                    }
                ]);
            })
        } else {
            Alert.alert('Uyarı', 'Onaylama anahtarınızda sorun var ?', [
                {
                    text: 'Tekrar Dene',
                    style: 'cancel',
                }
            ]);
        }

    }

    React.useEffect(() => { ref_input1.current.focus() } , [])

    return (
        <QKeyboardScreen>
            <View style={[styles.container, { justifyContent: "space-between" }]}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.innerContainer}>
                    <Text style={[styles.h1, { fontFamily: 'Lato-Regular' }]}>Güvenlik Anahtarı</Text>
                    <Text style={{ fontSize: 22, marginVertical: 10, fontFamily: 'Lato-Regular' }}>Size gönderdiğimiz güvenlik anahtarını oynaylayın.</Text>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <MaskedTextInput
                            mask="9"
                            onChangeText={(value) => {
                                if (value.length > 0) {
                                    onChangeKey_1(value);
                                    ref_input2.current.focus()
                                }
                            }}
                            style={[styles.input, { textAlign: 'center' }]}
                            keyboardType="numeric"
                            ref={ref_input1}
                        />
                        <MaskedTextInput
                            mask="9"
                            onChangeText={(value) => {
                                if (value.length > 0) {
                                    onChangeKey_2(value);
                                    ref_input3.current.focus()
                                } else {
                                    ref_input1.current.focus()
                                }
                            }}
                            style={[styles.input, { textAlign: 'center' }]}
                            keyboardType="numeric"
                            ref={ref_input2}
                        />
                        <MaskedTextInput
                            mask="9"
                            onChangeText={(value) => {
                                if (value.length > 0) {
                                    onChangeKey_3(value);
                                    ref_input4.current.focus()
                                } else {
                                    ref_input2.current.focus()
                                }
                            }}
                            style={[styles.input, { textAlign: 'center' }]}
                            keyboardType="numeric"
                            ref={ref_input3}
                        />
                        <MaskedTextInput
                            mask="9"
                            onChangeText={(value) => {
                                if (value.length > 0) {
                                    onChangeKey_4(value);
                                    ref_input5.current.focus()
                                } else {
                                    ref_input3.current.focus()
                                }
                            }}
                            style={[styles.input, { textAlign: 'center' }]}
                            keyboardType="numeric"
                            ref={ref_input4}
                        />
                        <MaskedTextInput
                            mask="9"
                            onChangeText={(value) => {
                                if (value.length > 0) {
                                    onChangeKey_5(value);
                                } else {
                                    ref_input4.current.focus()
                                }

                            }}
                            style={[styles.input, { textAlign: 'center' }]}
                            keyboardType="numeric"
                            ref={ref_input5}
                        />
                    </View>
                    <TouchableOpacity style={[styles.btn, { backgroundColor: color.primary, marginVertical: 10 }]} onPress={() => confirmKey()}>
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
