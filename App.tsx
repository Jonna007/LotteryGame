import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeScreen from './src/screens/HomeScreen';
import RulesScreen from './src/screens/RulesScreen';
import TicketSelectionScreen from './src/screens/TicketSelectionScreen';
import RaffleScreen from './src/screens/RaffleScreen';
import ResultsScreen from './src/screens/ResultsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Rules" component={RulesScreen} options={{ title: 'Reglas' }} />
        <Stack.Screen
          name="TicketSelection"
          component={TicketSelectionScreen}
          options={{ title: 'Selección de Boletos' }}
        />
        <Stack.Screen name="Raffle" component={RaffleScreen} options={{ title: 'Sorteo' }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Resultados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;