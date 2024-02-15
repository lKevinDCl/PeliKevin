import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const image = { uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5a689a45620741.5836c63d2c7f3.gif' };

export default function Login( props ) {

  const { navigation } = props;

  const goToRegister = () => {
    navigation.navigate("Register");
  }

  const goToMain = () => {
    navigation.navigate("Main");
  }

  

  const [fontsLoaded] = useFonts({
    'CroissantOne-Regular': require('./assets/fonts/CroissantOne-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

    console.log('email:', email);
    console.log('password:', password);
    console.log('Forgot password');
    console.log('Sign up');
  };

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={[styles.text, { fontFamily: 'CroissantOne-Regular' }]}>Travel</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>Login</Text>
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="e-mail"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Feather name="lock" size={24} color="black" />
          <TextInput
            
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <Button title="Login" onPress={goToMain} color="orange"/>

          <Text style={styles.formFotter}>Don't have an account?</Text>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.forgotPassword}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 30,
    borderRadius: 20,
  },
  formHeader: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formFotter : {
    fontSize: 14,
    padding: 10,
    marginBottom: -10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword : {
    fontSize: 14,
    padding: 10,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
