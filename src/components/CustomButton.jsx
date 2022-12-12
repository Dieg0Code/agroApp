import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, title = 'Ingresar' }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        backgroundColor: '#349B6D',
        padding: 15,
        borderRadius: 8,
        elevation: 3,
        alignItems: 'center',
        width: '70%',
        alignContent: 'center',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#FBFBFB',
    }

})

export default CustomButton;