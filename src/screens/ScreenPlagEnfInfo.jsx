import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Card from '../components/Card';
import data from '../../data/PlagasEnfermedades';

const ScreenPlagEnfInfo = ({ route, navigation }) => {

    // Filtra los items por nombre y tipo (enfermedad o plaga)
    const filterItemsByNameAndType = (name, type) => {
        return data.filter((item) => item.nombreCultivo === name && item.tipo === type);
    }

    return(
        // La FlatList se encarga de renderizar los items de manera eficiente, uno por uno, en este caso, los items son las tarjetas de las plagas o enfermedades, en base al cultivo seleccionado
        <FlatList
            contentContainerStyle={{ alignItems: 'center', padding: 20 }}
            data={filterItemsByNameAndType(route.params.nombreCultivo, route.params.tipo)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return(
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detalles', item)}
                    >
                        <Card>
                            <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
                            <Image source={item.img} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                        </Card>
                    </TouchableOpacity>
                )
            }}
        />
    )

}

export default ScreenPlagEnfInfo;
