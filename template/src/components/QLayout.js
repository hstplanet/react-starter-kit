
import { Animated, StyleSheet, Dimensions, View, Image } from 'react-native';
import React, { useRef, useEffect } from 'react';

import mapGetters from "../store/APP/getters"

import logo from "../assets/logo.png"

export default function QLayout({ showMenu, setShowMenu, children }) {

    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;
    const paddingValue = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true
        })
            .start()

        Animated.timing(paddingValue, {
            toValue: showMenu ? 1 : .7,
            duration: 300,
            useNativeDriver: true
        })
            .start()

        Animated.timing(offsetValue, {
            // YOur Random Value...
            toValue: showMenu ? 0 : 230,
            duration: 300,
            useNativeDriver: true
        })
            .start()

        Animated.timing(closeButtonOffset, {
            // YOur Random Value...
            toValue: !showMenu ? -30 : 0,
            duration: 300,
            useNativeDriver: true
        })
            .start()
    }, [showMenu])

    return (
        <Animated.View style={[styles.layout, {
            borderRadius: !showMenu ? 15 : 0,
            transform: [
                { scale: scaleValue },
                { translateX: offsetValue },
            ]
        }]}>

            {
                // Load View
                mapGetters.isLoading() ? <View style={[styles.load]}>
                    <Image source={logo} style={styles.loadLogo} />
                </View> : null
            }
            <Animated.View>

                {children.map(e => {
                    if (e.type.name === "QHeader") {
                        return e
                    }
                })}
                {children.map((e, index) => {
                    if (e.type.name === "QPageContainer") {
                        let windowHeight = Dimensions.get('window').height;
                        if (children.findIndex(e => e.type.name === "QFooter") !== -1) {
                            windowHeight -= 60
                        }
                        if (children.findIndex(e => e.type.name === "QHeader") !== -1) {
                            windowHeight -= 90
                        }

                        return React.cloneElement(e, { key: index, style: { height: windowHeight } })
                    }
                })}
                {children.map(e => {
                    if (e.type.name === "QFooter") {
                        return e
                    }
                })}
            </Animated.View>
        </Animated.View >
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#fff',
    },
    load: {
        position: "absolute",
        width: "100%",
        height: Dimensions.get("screen").height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000050',
        zIndex: 9999
    },
    loadLogo: {
        width: 80,
        resizeMode: "contain",
    }
});