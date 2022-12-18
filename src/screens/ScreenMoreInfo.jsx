import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";

const ScreenMoreInfo = () => {
    return(
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#002245',
                
            }}
        >
            <Image source={require('../../assets/aiepLogo.png')} style={styles.image}/>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>AIEP - Osorno - 2022</Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Proyecto de especialidad</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20}}>Desarrollado por:</Text>
            <Text style={{color: 'white', fontSize: 16, marginTop: 20}}>Diego Obando</Text>
            <Text style={{color: 'white', fontSize: 16, marginTop: 20}}>Juan Castillo</Text>
            <Text style={{color: 'white', fontSize: 16, marginTop: 20}}>Macarena Vidal</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 20.}}>Profesor guia:</Text>
            <Text style={{color: 'white', fontSize: 16, marginTop: 20}}>Felipe Olivares</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
})



export default ScreenMoreInfo;