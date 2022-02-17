import { Text, View, TouchableOpacity, Image } from 'react-native';

import color from "../css/color"

export default function QFooterMenu({ currentTab, title, image , onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                backgroundColor: currentTab == title ? color.primary : 'transparent',
                borderRadius: 8,
            }}>

                <Image source={image} style={{
                    width: 18, height: 18,
                    tintColor: !currentTab == title ? color.primary : "white"
                }} />

                <Text style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: !currentTab == title ? color.primary : "white"
                }}>{title}</Text>

            </View>
        </TouchableOpacity>
    )
}