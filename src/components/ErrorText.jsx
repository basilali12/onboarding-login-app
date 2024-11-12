import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorText = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

export default ErrorText;
