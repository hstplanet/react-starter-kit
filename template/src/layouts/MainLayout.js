import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux'


import mapGetters from "../store/User/getters";
import mapActions from "../store/User/actions"

import hst from "../hst";

import menu from '../assets/menu.png';
import close from '../assets/close.png';

import QLayout from "../components/QLayout"
import QHeader from '../components/QHeader';
import QDrawer from '../components/QDrawer';
import QPageContainer from '../components/QPageContainer';
import QDrawerMenu from "../components/QDrawerMenu"

import { RouterMainLayout } from "../router"

const Stack = createNativeStackNavigator();

const config = {
    headerShown: false,
    animationEnabled: false
}

export default function MainLayout({ navigation }) {

    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(true);
    const [load, setLoad] = useState(false);

    React.useEffect(() => {
        new hst().server.auth.onAuthStateChanged().then(user => {
            dispatch(mapActions.setUser(user))
            setLoad(true);
        }).catch(error => {
            navigation.navigate("SignIn")
        });
    }, []);

    return (
        <SafeAreaView style={styles.layout}>

            <QDrawer navigation={navigation} setShowMenu={setShowMenu} >
                {
                    RouterMainLayout.map((e) => {
                        if (e.drawer) {
                            return (<QDrawerMenu key={e.name} to={e.path} title={e.name} image={e.icon} />)
                        }
                    })
                }
            </QDrawer>

            <QLayout view="lHh Lpr fff" showMenu={showMenu}>
                <QHeader style={styles.header}>
                    <TouchableOpacity style={styles.headerTouchable} onPress={() => { setShowMenu(!showMenu) }}>
                        <Image source={!showMenu ? close : menu} style={styles.headerIcon} />
                    </TouchableOpacity>

                    <Text>HST Planet Yazılım</Text>
                    <Image source={() => { return { uri: mapGetters.getUser()?.photoURL?.replace("localhost", "192.168.1.35") } }} style={styles.headerImage} />
                </QHeader>

                <QPageContainer>
                    <Stack.Navigator screenOptions={config}>
                        {
                            RouterMainLayout.map((e, index) => (
                                <Stack.Screen key={index} name={e.path} component={e.component} />
                            ))
                        }
                    </Stack.Navigator>
                </QPageContainer>
            </QLayout>


        </SafeAreaView>
    )



}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        position: 'relative',
    },

    header: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    headerTouchable: {
        flexDirection: "row", alignItems: "center"
    },
    headerIcon: {
        width: 24,
        height: 24,
        tintColor: 'grey',
    },
    headerImage: {
        width: 38,
        height: 38,
        borderRadius: 38,
    }

});