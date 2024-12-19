import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const RaffleScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedTicket } = route.params as { selectedTicket: number[] };
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);

  useEffect(() => {
    const generateWinningNumbers = () => {
      const numbers: number[] = [];
      while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      return numbers;
    };

    const showNumbersWithDelay = (numbers: number[]) => {
      let i = 0;
      const interval = setInterval(() => {
        setWinningNumbers((prevNumbers) => [...prevNumbers, numbers[i]]);
        i++;
        if (i === numbers.length) {
          clearInterval(interval);
          setTimeout(() => {
            navigation.navigate('Results', { selectedTicket, winningNumbers: numbers });
          }, 2000);
        }
      }, 2000);
    };

    const winningNumbers = generateWinningNumbers();
    showNumbersWithDelay(winningNumbers);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorteo</Text>
      <View style={styles.numbersContainer}>
        {winningNumbers.map((number, index) => (
          <Text key={index} style={styles.number}>
            {number}
          </Text>
        ))}
      </View>
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
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default RaffleScreen;