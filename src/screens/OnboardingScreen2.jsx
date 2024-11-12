import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen3 = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.replace('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../img/img.png')} />
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.description}>
      Dunno what to write here, I'm a developer, not a creative writer but I'll let the app speak for itself
      </Text>
      <Button title="Get Started" onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OnboardingScreen3;