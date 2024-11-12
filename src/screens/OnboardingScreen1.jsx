import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen1 = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../img/img.png')} />
      <Text style={styles.title}>Welcome To My App</Text>
      <Text style={styles.description}>
        Onboarding App With SignUp and Login Screens
      </Text>
      <Button title="Next" onPress={handleNext} />
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

export default OnboardingScreen1;
