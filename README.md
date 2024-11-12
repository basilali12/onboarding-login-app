# onboarding-login-app
This is a simple React Native app that provides user authentication functionality, enhanced with beautiful animations. The app includes a login screen and a sign-up screen, both featuring form validation and input handling. The app is built using React Native, Formik for form handling, Yup for validation, and Lottie for animations.

# Features
- Onboarding Screens: Two onboarding screens to introduce users to the app with a title, image, and brief description, along with "Next" and "Get Started" buttons for navigation.
- Login Screen: Allows users to enter their email and password to log in.
- SignUp Screen: Allows new users to register by providing their name, email, and password.
- Form Validation: Email and password validation using Formik and Yup.
- Password Visibility Toggle: Users can toggle password visibility on both screens.
- Lottie Animation: Uses Lottie for smooth, interactive animations that enhance the UI.
- Snowflakes Animation: Adds a gentle snowfall animation in the background for a beautiful user experience.



# Screens
# Onboarding Screens:
- Two screens with a title, image, and a small description to introduce users to the app.
- Contains navigation buttons:
 - Next: Moves to the next onboarding screen.
 - Get Started: Navigates to the sign-up screen.

  
# Login Screen:
- Email input
- Password input with visibility toggle
- Login button
- "Forgot Password?" and "Sign Up" links
- Snowflakes animation in the background

# SignUp Screen:

- Name input
- Email input
- Password input with visibility toggle
- Sign-up button
- "Login" link to navigate back to the Login screen.
- Snowflakes animation in the background

# Dependencies
- React Navigation: Navigation library to navigate between screens.
- Formik: Library for handling form state and submissions.
- Yup: Library for schema-based form validation.
- Lottie: Animation library used to add smooth animations like the snowflakes background.

# Usage
# Onboarding Screens
1. View the introductory content on the onboarding screens.
2. Tap Next to move to the next screen.
3. Tap Get Started to navigate to the sign-up screen.

# Login Screen
1. Enter your email and password.
2. Tap Login to attempt to log in (for now, it will log "Login button pressed" to the console).
3. Tap Forgot Password? to handle password recovery (placeholder), logging "Forgot Password button pressed" to the console.
4. Tap "Sign Up" to navigate to the sign-up screen.

# SignUp Screen
1. Enter your name, email, and password.
2. Tap Sign Up to submit your registration, which logs "Sign Up button pressed" to the console.
3. Tap "Login" to navigate back to the login screen.
