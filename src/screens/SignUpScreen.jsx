import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';

const SignUpScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Sign Up submitted:', values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Name Input using InputField component */}
            <InputField
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholderTextColor="#888"
            />
            <ErrorText error={touched.name && errors.name} />

            {/* Email Input using InputField component */}
            <InputField
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
            <ErrorText error={touched.email && errors.email} />

            {/* Password Input using InputField component */}
            <InputField
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholderTextColor="#888"
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
            <ErrorText error={touched.password && errors.password} />

            {/* Sign Up Button using Button component */}
            <Button title="Sign Up" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      {/* Navigate to Login Button */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Login</Text>
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
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  toggleButton: {
    paddingHorizontal: 10,
    marginTop: -20,
    marginBottom: 20,
  },
  toggleButtonText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#777',
  },
  footerLink: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SignUpScreen;
