import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
import Videos from '../Pages/Videos';
import Perfil from '../Pages/Perfil';
import Inserir from '../Pages/Inserir';
import Cadastro from '../Components/Cadastro';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado , cadastrar } = useContext(AuthContext);

    
    if (!logado && !cadastrar ) {
        return ( <Login />)
    }

    if( !logado && cadastrar ) {
        return( <Cadastro /> )
    }
    

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Busca"
                    component={Busca}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={size} />
                        ),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}