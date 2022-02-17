import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import QKeyboardScreen from "../../components/QKeyboardScreen"
import Checkbox from 'expo-checkbox';

import hst from "../../hst"

import logo from "../../assets/logo.png"
import color from "../../css/color";
import style from "../../css/style";

export default function SignIn({ navigation }) {

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [fullName, onChangeFullName] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [lastname, onChangeLastname] = React.useState("");
    const [isSelected, setSelection] = React.useState(false);

    function warning() {
        Alert.alert('Uyarı', 'Üyelik gerçekleştirilirken bir sorun oluştu. Lütfen tekrar deneyin.', [
            {
                text: 'Tamam',
                style: 'cancel',
            }
        ]);
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function register() {

        if (isSelected) {
            if (validateEmail(email.trim())) {
                if (email.length > 0 && password.length > 0 && fullName.length > 0) {
                    new hst().server.auth.createUserWithEmailAndPassword(email.trim(), password.trim()).then(res => {
                        new hst().server.auth.updateProfile({ fullName: fullName, phone: phone, name: name, lastname: lastname }).then(res => {
                            new hst().server.auth.sendEmailVerification().then(res => {
                                navigation.navigate("SignIn");
                            }).catch(err => {
                                warning();
                            })
                        }).catch(err => {
                            console.log("Error Update");
                            warning();
                        })
                    }).catch(err => {
                        console.log("Error Singup");
                        warning();
                    });
                } else {
                    Alert.alert('Uyarı', 'Tüm işaretli alanları lütfen doldurun.', [
                        {
                            text: 'Tamam',
                            style: 'cancel',
                        }
                    ]);
                }
            } else {
                Alert.alert('Uyarı', 'Lütfen geçerli bir e posta adresi giriniz.', [
                    {
                        text: 'Tamam',
                        style: 'cancel',
                    }
                ]);
            }

        } else {
            Alert.alert('Uyarı', 'Lütfen kullanım koşullarını, gizlilik politikası ve aydınlatma metnini okuyup onayladığınızı kabul edin.', [
                {
                    text: 'Tamam',
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
                    <Text style={[styles.h1, { fontFamily: 'Lato-Bold', color: color.primary }]}>Kayıt Ol</Text>
                    <Text style={[{ fontSize: 22, marginVertical: 10, fontFamily: 'Lato-Regular' }]}>Sana özel fırsatlardan ve indirimlerden yararlanmak için kayıt ol</Text>
                    <Text style={[{ marginVertical: 4 }]}>Ad Soyad*</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            onChangeFullName(value)
                            if (value.trim().split(" ").length > 1) {
                                let name = "";
                                value.trim().split(" ").forEach((element, index) => {
                                    if (index + 1 != value.trim().split(" ").length) {
                                        name += element + " ";
                                    }
                                })
                                onChangeName(name.trim())
                                onChangeLastname(value.trim().split(" ")[value.trim().split(" ").length - 1].trim())
                            }
                        }}
                        value={fullName}
                    />
                    <Text style={[{ marginVertical: 4 }]}>E Posta*</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                    <Text style={[{ marginVertical: 4 }]}>Şifre*</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        secureTextEntry
                        value={password}
                    />
                    <Text style={[{ marginVertical: 4 }]}>Telefon</Text>
                    <MaskedTextInput
                        mask="0999 999 99 99"
                        onChangeText={onChangePhone}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <View style={[styles.row, { marginVertical: 8 }]}>
                        <Checkbox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={[styles.checkbox, { marginRight: 5 }]}
                            color={color.primary}
                        />
                        <View style={[styles.row, { flexWrap: 'wrap' }]}>
                            <TouchableOpacity>
                                <Text style={[{ color: color.primary, fontFamily: 'Lato-Bold' }]}>Kullanım Koşulları</Text>
                            </TouchableOpacity>
                            <Text style={[{ color: color.fontColor, fontFamily: 'Lato-Bold' }]}>'nı kabul ediyorum.</Text>
                            <TouchableOpacity>
                                <Text style={[{ color: color.primary, fontFamily: 'Lato-Bold' }]}>Gizlilik Politikası ve Aydınlat Metni</Text>
                            </TouchableOpacity>
                            <Text style={[{ color: color.fontColor, fontFamily: 'Lato-Bold' }]}>'ni okudum,</Text>
                            <Text style={[{ color: color.fontColor, fontFamily: 'Lato-Bold' }]}>kişisel verilerimin işlenmesine ilişkin</Text>
                            <TouchableOpacity>
                                <Text style={[{ color: color.primary, fontFamily: 'Lato-Bold' }]}> burada </Text>
                            </TouchableOpacity>
                            <Text style={[{ color: color.fontColor, fontFamily: 'Lato-Bold' }]}>belirtildiği şekilde açık rızam vardır.</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={[styles.btn, { backgroundColor: color.primary, marginVertical: 10 }]} onPress={() => register()}>
                        <Text style={[{ color: "#fff" }]}>Kayıt Ol</Text>
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
    checkbox: {
        backgroundColor: 'white',
    }
});
