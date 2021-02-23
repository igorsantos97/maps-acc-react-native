import React from 'react';
// nosso Switch
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from "@expo/vector-icons";

import Header from './components/Header';
import Home from './screens/Home';
import Accenture from './screens/Accenture';

const { Navigator, Screen } = createStackNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F2F2' } }}
            >
                {/* O componente definido no primeiro Screen, será o primeiro a ser renderizado */}
                <Screen
                    name="home"
                    component={Home}
                />
                <Screen
                    name="accenture"
                    component={Accenture}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Accenture" />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}
