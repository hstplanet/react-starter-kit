import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function QKeyboardScreen({ children }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </TouchableWithoutFeedback>
    )
}