import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const RulesScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Reglas del Juego</Text>
        <View style={styles.rulesContainer}>
          <Text style={styles.rule}>- Selecciona un boleto con 3 números.</Text>
          <Text style={styles.rule}>- Se sortearán 3 números ganadores.</Text>
          <Text style={styles.rule}>- Si aciertas los 3 números, ¡ganas!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink', 
    borderRadius: 10, 
    padding: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
    textAlign: 'center',
  },
  rulesContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  rule: {
    fontSize: 28,
    marginBottom: 15,
    lineHeight: 54,
  },
});

export default RulesScreen;