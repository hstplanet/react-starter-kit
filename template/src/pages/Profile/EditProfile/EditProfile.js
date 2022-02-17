import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import React from 'react';
import { useDispatch } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';

import QSeperator from "../../../components/QSeperator"

import mapGetters from "../../../store/User/getters"
import mapActions from "../../../store/APP/actions"
import mapActionsUser from "../../../store/User/actions"

import style from "../../../css/style"
import color from "../../../css/color"

import hst from "../../../hst"



export default function EditProfile({ navigation }) {

    const user = mapGetters.getUser();

    const dispatch = useDispatch();

    const [email, onChangeEmail] = React.useState(user.emailAddress);
    const [name, onChangeName] = React.useState(user.name);
    const [lastName, onChangeLastName] = React.useState(user.lastname);
    const [phone, onChangePhone] = React.useState(user.phone);
    const [photoURL, onChangePhotoURL] = React.useState(user.photoURL);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            uri: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            dispatch(mapActions.setLoading(true))
            new hst().server.storage.uploadURL(result.uri).then((blob) => {
                new hst().server.auth.updateProfile({ photoURL: blob.downloadURL }).then(res => {
                    onChangePhotoURL(blob.downloadURL);
                    dispatch(mapActionsUser.setPhotoURL(blob.downloadURL))
                    dispatch(mapActions.setLoading(false))
                }).catch(err => {
                    dispatch(mapActions.setLoading(false))
                })
            })
        }
    };

    const updateProfile = () => {
        if (validateEmail(email.trim())) {
            if (name.length > 0 && lastName.length > 0 && phone.length > 0) {
                dispatch(mapActions.setLoading(true))
                new hst().server.auth.updateProfile({ name: name, lastname: lastName, fullName: name + " " + lastName, phone: phone, emailAddress: email }).then(res => {
                    dispatch(mapActions.setLoading(false))
                    dispatch(mapActionsUser.setUser(res.user));
                });
            } else {
                Alert.alert('Uyarı', 'Bilgileriniz boş bırakılamaz.', [
                    {
                        text: 'Tekrar Dene',
                        style: 'cancel',
                    }
                ]);
            }
        } else {
            Alert.alert('E Posta hatalı', 'Lütfen geçerli bir e posta adresi giriniz.', [
                {
                    text: 'Tekrar Dene',
                    style: 'cancel',
                }
            ]);
        }

    }


    return (
        <ScrollView style={[{ flex: 1, backgroundColor: '#fff' }]}>
            <View style={[styles.row, { padding: 12 }]}>
                <Image style={styles.profilePhoto} source={{ uri: photoURL.replace("localhost", "192.168.1.35") }} />
                <View style={[{ marginLeft: 12, alignItems: 'flex-start' }]}>
                    <Text style={styles.h2}>{user.fullName}</Text>
                    <Text style={[{ color: color.fontColor }]}>{user.emailAddress}</Text>
                    <TouchableOpacity style={[{ marginTop: 5, backgroundColor: color.primary, borderRadius: 3, padding: 5 }]} onPress={pickImage}>
                        <Text style={[{ fontSize: 16, color: color.backgroundColor }]}>Profil Resmini Değiştir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <QSeperator />
            <View style={[{ flexDirection: "row", alignItems: 'center', padding: 12 }]}>
                <Text style={[{ width: 100, fontSize: 14, color: color.primary, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>E Posta</Text>
                <TextInput
                    style={[styles.input, { flexGrow: 1 }]}
                    onChangeText={onChangeEmail}
                    value={email}
                />
            </View>
            <QSeperator />
            <View style={[{ flexDirection: "row", alignItems: 'center', padding: 12 }]}>
                <Text style={[{ width: 100, fontSize: 14, color: color.primary, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Adınız</Text>
                <TextInput
                    style={[styles.input, { flexGrow: 1 }]}
                    onChangeText={onChangeName}
                    value={name}
                />
            </View>
            <QSeperator />
            <View style={[{ flexDirection: "row", alignItems: 'center', padding: 12 }]}>
                <Text style={[{ width: 100, fontSize: 14, color: color.primary, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Soyadınız</Text>
                <TextInput
                    style={[styles.input, { flexGrow: 1 }]}
                    onChangeText={onChangeLastName}
                    value={lastName}
                />
            </View>
            <QSeperator />
            <View style={[{ flexDirection: "row", alignItems: 'center', padding: 12 }]}>
                <Text style={[{ width: 100, fontSize: 14, color: color.primary, fontFamily: "Lato-Bold", marginVertical: 8, textAlign: "left" }]}>Telefon</Text>
                <TextInput
                    style={[styles.input, { flexGrow: 1 }]}
                    onChangeText={onChangePhone}
                    keyboardType="numeric"
                    value={phone}
                />
            </View>
            <View style={[styles.row, { padding: 12, justifyContent: 'flex-end' }]}>
                <TouchableOpacity style={[{ backgroundColor: color.primary, paddingHorizontal: 20, paddingVertical: 9, borderRadius: 5 }]} onPress={() => { updateProfile() }}>
                    <Text style={[{ color: "#fff" }]}>Düzenle</Text>
                </TouchableOpacity>
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
    },
    profilePhoto: {
        width: 80,
        height: 80,
        borderRadius: 80
    }
});
