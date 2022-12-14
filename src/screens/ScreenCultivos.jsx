import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Card from '../components/Card';

const ScreenCultivos = ({ navigation }) => {

    // Datos de los cultivos
    const [data] = useState([
        {
            nombreCultivo: 'Papa',
            nombreCientifico: 'Solanum tuberosum',
            descripcion: 'Planta perteneciente a la familia de las solanáceas, originaria de Sudamérica y cultivada por todo el mundo por sus tubérculos comestibles.',
            image: require('../../assets/papa1.jpg'),
        },
        {
            nombreCultivo: 'Avena',
            nombreCientifico: 'Avena sativa',
            descripcion: 'La avena es un cultivo versátil y de multiuso; se utiliza como suplemento para producir forraje verde en periodos críticos para alimentación del ganado, especialmente en otoño e invierno. Los granos cubiertos con cascara, y los granos pelados y desnudos, sin cáscara, son Importantes tanto en alimentación animal como en alimentar animal y salud humana.',
            image: require('../../assets/avena.jpg'),
        },
        {
            nombreCultivo: 'Trigo',
            nombreCientifico: 'Triticum spp',
            descripcion: 'El trigo es una planta gramínea anual con espigas. Es decir, se trata de una especie de pasto. Su altura es variable, va desde treinta centímetros hasta un metro y medio de largo.',
            image: require('../../assets/trigo.jpg'),
        }
    ]);

    return (
        // Renderiza en la pantalla los cultivos
        <View>
            <FlatList
                data={data}
                contentContainerStyle={{ alignItems: 'center', padding: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Plagas y enfermedades', item)}
                    >
                        <Card>
                            <Text style={{ fontWeight: 'bold' }} >{item.nombreCultivo}</Text>
                            <Image source={item.image} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ScreenCultivos;
