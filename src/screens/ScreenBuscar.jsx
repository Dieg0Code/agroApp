import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native";
import Card from "../components/Card";
import data from "../../data/PlagasEnfermedades";

// Renderiza la pantalla de busqueda
const ScreenBuscar = ({ navigation }) => {

    const [filterData, setFilterData] = useState();
    const [masterData, setMasterData] = useState();
    const [search, setSearch] = useState('');

    const readData = () => {
        setFilterData(data);
        setMasterData(data);
    }

    useEffect(() => {
        readData();
    }, []);

    // Buscar por nombre o nombre de cultivo
    const searchByNameOrCultivo = (text) => {
        const newData = masterData.filter((item) => {
            const itemData = item.sintomas.toUpperCase() + item.nombre.toUpperCase() + item.nombreCultivo.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
        setSearch(text);
    }

    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Detalles', item)}
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
                    <Image source={item.img} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
        )
    }


    return(
        <View>
            <TextInput
                placeholder="Buscar"
                style={{ height: 40, borderColor: '#8BE4A3', borderWidth: 1, margin: 20, borderRadius: 20, paddingLeft: 20 }}
                value={search}
                onChangeText={(text) => searchByNameOrCultivo(text) }
            />
            <FlatList
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 90 }}
                data={filterData}
                keyExtractor={(item) => item.id}
                renderItem={ItemView}
            />
        </View>

    )
}

export default ScreenBuscar;