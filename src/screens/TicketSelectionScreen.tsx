import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';

const TicketSelectionScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  const generateTicket = (): number[] => {
    const numbers: number[] = [];
    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  const handleTicketSelect = (index: number) => {
    setSelectedTicket(index);
  };

  const handlePlay = () => {
    if (selectedTicket !== null) {
      const tickets = [generateTicket(), generateTicket(), generateTicket()];
      const selectedTicketNumbers = tickets[selectedTicket]; 
      navigation.navigate('Raffle', { selectedTicket: selectedTicketNumbers });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un boleto</Text>
      {[generateTicket(), generateTicket(), generateTicket()].map((ticket, index) => (
        <View
          key={index}
          style={[
            styles.ticketContainer,
            selectedTicket === index && styles.selectedTicket,
          ]}
        >
          <Text style={styles.ticketText}>{ticket.join(' - ')}</Text>
          <Button title="Seleccionar" onPress={() => handleTicketSelect(index)} />
        </View>
      ))}
      <Button
        title="Jugar"
        onPress={handlePlay}
        disabled={selectedTicket === null}
        style={styles.playButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Platform.OS === 'web' ? 'white' : '#f4f4f4', // Fondo blanco para web, gris claro para móvil
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  ticketContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  selectedTicket: {
    backgroundColor: '#FFD700',
  },
  ticketText: {
    fontSize: 20,
  },
  playButton: {
    backgroundColor: '#FFD700',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default TicketSelectionScreen;