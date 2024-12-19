import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../components/Button';

const ResultsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedTicket, winningNumbers } = route.params as {
    selectedTicket: number[];
    winningNumbers: number[];
  };

  const hasWon = selectedTicket.every((number) => winningNumbers.includes(number));

  const handlePlayAgain = () => {
    navigation.navigate('TicketSelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <Text style={styles.result}>
        {hasWon ? "¡Felicidades! Has ganado." : "Lo siento, has perdido."}
      </Text>
      <Text>Tu boleto: {selectedTicket.join(' - ')}</Text>
      <Text>Números ganadores: {winningNumbers.join(' - ')}</Text>
      <Button title="Jugar de nuevo" onPress={handlePlayAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ResultsScreen;