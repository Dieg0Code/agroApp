import React from "react";
import { ScrollView, Text, Image, TouchableOpacity } from "react-native";
import Card from "../components/Card";


const ScreenPlagEnf = ({ route, navigation }) => {

    const { nombreCultivo, nombreCientifico, descripcion } = route.params;

    return(
        // Rederza un vista scrollable para las tarjetas de las plagas y enfermedades
        <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Mas información', { nombreCultivo, nombreCientifico, descripcion, tipo: 'Plaga' }) }
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }}>Plagas ({nombreCultivo})</Text>
                    <Image source={require('../../assets/plagas.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Mas información', { nombreCultivo, nombreCientifico, descripcion, tipo: 'Enfermedad' }) }
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }}>Enfermedades ({nombreCultivo})</Text>
                    <Image source={require('../../assets/enfermedades.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )
};

export default ScreenPlagEnf;