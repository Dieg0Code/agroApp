import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";

// Esta pantalla se encarga de renderizar los detalles de las plagas y enfermedades, segun el cultivo seleccionado
const ScreenDetalles = ({ route }) => {

    if(route.params.tipo === 'Plaga'){
        return(
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: '#EBFDD7',
                }}
            >
                <Text style={styles.title}>{route.params.nombre}</Text>
                <Text style={styles.text}>{route.params.descripcion}</Text>
                <Text style={styles.subtitle}>Sintomas</Text>
                <Image source={route.params.img2} style={styles.image} />
                <Text style={styles.text}>{route.params.sintomas}</Text>
                <Image source={route.params.img} style={styles.image} />
                <Text style={styles.subtitle}>Medidas Preventivas</Text>
                <Text style={styles.text}>{route.params.medidasPreventivas}</Text>
                <Text style={styles.subtitle}>Medidas de control</Text>
                <Text style={styles.text}>{route.params.controlQuimico}</Text>
            </ScrollView>
        )
    } else {
        return(
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    padding: 20,
                    backgroundColor: '#EBFDD7',
                }}
            >
                <Text style={styles.title}>{route.params.nombre}</Text>
                <Text style={styles.text}>{route.params.descripcion}</Text>
                <Text style={styles.subtitle}>Sintomas</Text>
                <Text style={styles.text}>{route.params.sintomas}</Text>
                <Image source={route.params.img} style={styles.image} />
                <Text style={styles.subtitle}>Medidas Preventivas</Text>
                <Text style={styles.text}>{route.params.medidasPreventivas}</Text>
                <Text style={styles.subtitle}>Medidas de Control</Text>
                <Text style={styles.text}>{route.params.controlQuimico}</Text>
            </ScrollView>
        )

    }


};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: 250,
        height: 200,
        marginTop: 10,
        borderRadius: 20,
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
        fontFamily: 'Roboto',
    }
});

export default ScreenDetalles;