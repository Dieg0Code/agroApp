import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import ScreenInicio from "./src/screens/ScreenInicio";
import ScreenCultivos from "./src/screens/ScreenCultivos";
import ScreenBuscar from "./src/screens/ScreenBuscar";

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ScreenMoreInfo from "./src/screens/ScreenMoreInfo";
import ScreenPlagEnf from "./src/screens/ScreenPlagEnf";
import ScreenPlagEnfInfo from "./src/screens/ScreenPlagEnfInfo";
import ScreenDetalles from "./src/screens/ScreenDetalles";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Navegación de tipo stack, se encarga de la navegación de toda la información de los cultivos, plagas y enfermedades
const Mystack = () => {
    return(
        <Stack.Navigator
            headerShown={false}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#C3F3C0",
                    borderColor: "#F5F5F5",
                    height: 80,
                    borderRadius: 15,
                },
                animation: 'slide_from_right',
                backAnimation: 'slide_from_left',
            }}
        >
            <Stack.Screen
                name="Buscar sintomas"
                component={ScreenBuscar}
            />
            <Stack.Screen
                name="Cultivos"
                component={ScreenCultivos}
            />
            <Stack.Screen
                name="Plagas y enfermedades"
                component={ScreenPlagEnf}
            />
            <Stack.Screen
                name="Mas información"
                component={ScreenPlagEnfInfo}
            />
            <Stack.Screen
                name="Detalles"
                component={ScreenDetalles}
            />

                
        </Stack.Navigator>
    )
}

// Navegación de tipo tab, se encarga de la navegación de las pantallas de inicio, buscar y mas información
const MyTabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: "#349B6D",
                tabBarInactiveTintColor: "#000000",
                tabBarStyle: {
                    backgroundColor: "#C3F3C0",
                    borderTopColor: "#F5F5F5",
                    height: 60,
                    paddingTop: 5,
                    paddingBottom: 5,
                    borderRadius: 10,

                },
                headerStyle: {
                    backgroundColor: "#C3F3C0",
                    borderColor: "#F5F5F5",
                    height: 80,
                    borderRadius: 15,
                },
            }}
        >
            <Tab.Screen 
                name="Inicio"
                component={ScreenInicio} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
             />
             <Tab.Screen
                name="Buscar"
                initialParams={{screen: "Buscar sintomas"}}
                component={Mystack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Información"
                initialParams={{screen: "Cultivos"}}
                component={Mystack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
};

// Navegación de tipo drawer, se encarga de la navegación de la pantalla de mas información, a su vez exporta la navegación en general
export default function Navigation() {
    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Mas información"
                screenOptions={{
                    headerShown: false,
                    drawerActiveTintColor: "#349B6D",
                    drawerInactiveTintColor: "#000000",
                    drawerStyle: {
                        backgroundColor: "#C3F3C0",
                        borderTopColor: "#F5F5F5"
                    },
                }}
            
            >
                <Drawer.Screen
                name="Home"
                component={MyTabs}
                headerShown={false}
                />
                <Drawer.Screen
                name="Descargar mas información"
                component={ScreenMoreInfo}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}