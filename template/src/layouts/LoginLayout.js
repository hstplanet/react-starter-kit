import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouterLoginLayout } from "../router"

const Login = createNativeStackNavigator();

export default function LoginLayout({ navigation }) {

    return (
        <Login.Navigator screenOptions={{
            headerShown: false,
            animationEnabled: false
        }}>
            {
                RouterLoginLayout.map((e, index) => (
                    <Login.Screen key={index} name={e.name} component={e.component} />
                ))
            }
        </Login.Navigator>
    )
}
