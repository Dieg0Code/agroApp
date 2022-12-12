import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import CustomButton from "../components/CustomButton";

const ScreenMoreInfo = () => {
    return(
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EBFDD7',
            }}
        >
            <CustomButton  title="Descargar mas info"
            />
        </View>

    )
}



export default ScreenMoreInfo;