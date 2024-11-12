import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
 
const LoginScreen = () => {
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email address').required('Email is required'),
   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
   });

   return (
     <View style={styles.container}>
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
             {/* Email Input */}
             <View style={styles.inputContainer}>
               <TextInput
                 style={styles.input}
                 placeholder="Email"
                 placeholderTextColor="#888"
                 value={values.email}
                 onChangeText={handleChange('email')}
                 onBlur={handleBlur('email')}
                 keyboardType="email-address"
                 autoCapitalize="none"
               />
             </View>
             {touched.email && errors.email && (
               <Text style={styles.errorText}>{errors.email}</Text>
             )}
 
             {/* Password Input */}
             <View style={styles.inputContainer}>
               <TextInput
                 style={styles.input}
                 placeholder="Password"
                 placeholderTextColor="#888"
                 value={values.password}
                 onChangeText={handleChange('password')}
                 onBlur={handleBlur('password')}
                 secureTextEntry={!isPasswordVisible}
                 autoCapitalize="none"
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
             {touched.password && errors.password && (
               <Text style={styles.errorText}>{errors.password}</Text>
             )}
 
             {/* Login Button */}
             <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
               <Text style={styles.loginButtonText}>Login</Text>
             </TouchableOpacity>
           </>
         )}
       </Formik>
 
       {/* Forgot Password */}
       <View style={styles.footer}>
         <TouchableOpacity>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
   },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
   },
  toggleButton: {
    paddingHorizontal: 10,
   },
  toggleButtonText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '500',
   },
  loginButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
   },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    alignSelf: 'flex-start',
   },
 });
 
 export default LoginScreen; 