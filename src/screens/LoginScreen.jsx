import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LottieView from 'lottie-react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';

const LoginScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      {/* Snowflake Animation Background */}
      <LottieView
        source={require('../animation/snowflakes.json')}
        speed={0.5} // Slow down the animation speed
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Login submitted:', values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <InputField
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholderTextColor="#bbb"
              keyboardType="email-address"
            />
            <ErrorText error={touched.email && errors.email} />

            <View style={styles.passwordContainer}>
              <InputField
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholderTextColor="#bbb"
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Text style={styles.toggleButtonText}>
                  {isPasswordVisible ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>
            <ErrorText error={touched.password && errors.password} />

            <Button title="Login" onPress={() => {console.log("Login button pressed"); handleSubmit();}} />
          </>
        )}
      </Formik>

      <View style={styles.footer}>
      <TouchableOpacity onPress={() => {console.log("Forgot Password button pressed");}}>
        <Text style={styles.footerLink}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  animation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5, // Adjust opacity for subtlety
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    paddingHorizontal: 10,
  },
  toggleButtonText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  footerLink: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginScreen;
