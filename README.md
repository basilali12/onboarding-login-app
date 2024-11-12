# onboarding-login-app
This is a simple React Native app that provides user authentication functionality. The app includes a login screen and a sign-up screen with validation and input handling. The app is built using React Native, Formik for form handling, and Yup for validation.

# Features
- Login Screen: Allows users to enter their email and password to log in.
- SignUp Screen: Allows new users to register by providing their name, email, and password.
- Form Validation: Email and password validation using Formik and Yup.
- Password Visibility Toggle: Users can toggle password visibility on both screens.

# Screens
# Login Screen:
- Email input
- Password input with visibility toggle
- Login button
- "Forgot Password?" and "Sign Up" links

# SignUp Screen:

- Name input
- Email input
- Password input with visibility toggle
- Sign-up button
- "Login" link to navigate back to the Login screen.

# Dependencies
- React Navigation: Navigation library to navigate between screens.
- Formik: Library for handling form state and submissions.
- Yup: Library for schema-based form validation.

# Usage
# Login Screen
1. Enter your email and password.
2. Tap "Login" to attempt to log in (for now, it will just log values to the console).
3. Tap "Forgot Password?" to handle password recovery (placeholder).
4. Tap "Sign Up" to navigate to the sign-up screen.

# SignUp Screen
1. Enter your name, email, and password.
2. Tap "Sign Up" to submit your registration.
3. Tap "Login" to navigate back to the login screen.