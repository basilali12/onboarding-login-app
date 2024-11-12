import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Create an animated value for opacity
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in the text when the screen loads
    Animated.timing(fadeAnim, {
      toValue: 1,           
      duration: 800,       
      useNativeDriver: true // Use native driver for better performance
    }).start();

    // Automatically navigate to LoginScreen after 0.8 seconds
    const timer = setTimeout(() => {
      navigation.replace('SignUp');
    }, 800); // 800 milliseconds (0.8 seconds) delay

    return () => clearTimeout(timer); // Clean up the timer
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>
        Welcome
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WelcomeScreen;
