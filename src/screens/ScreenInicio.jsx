import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Esta pantalla se encarga de renderizar la pantalla de inicio
const ScreenInicio = ({ navigation }) => {
    return (
        <View style={ styles.container }>
          <Image source={require('../../assets/logo.png')} />
        </View>
    )
}

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBFDD7',
  },
});

export default ScreenInicio;