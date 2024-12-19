import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import Button from '../components/Button';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('TicketSelection');
  };

  const handleRules = () => {
    navigation.navigate('Rules');
  };

  return (
    <ImageBackground source={require('../assets/fondo2.webp')} style={styles.backgroundImage}>
      <View style={styles.container}> 
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo} 
        />
        
        <View style={styles.buttonsContainer}>
          <Button title="Empezar" onPress={handleStart} />
          <Button title="Reglas" onPress={handleRules} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(185, 180, 212, 0.7)', 
    padding: 60,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '40%',
  },
});

export default HomeScreen;

