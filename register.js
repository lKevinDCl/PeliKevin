import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axiosInstance from './src/utils/axios';

const image = { uri: 'https://i.pinimg.com/originals/98/2d/a4/982da49a326a09fa42696750310a478e.jpg' };

export default function Register(props) {

  const [state, setState] = useState({
    names: "",
    lastNames: "",
    email: "",
    password: "",
  });

  //const [image, setImage] = useState(null);

  const handleChangeText = (text, name) => {
    setState({
      ...state,
      [name]: text
    })
  }

  const onRegister = async () => {
    const sendable = {
      "name": state.names,
      "email": state.email,
      "lastNames": state.lastNames,
      "password": state.password
    }
    await axiosInstance.post("/v1/users", sendable)
  }

  const { navigation } = props;

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const [fontsLoaded] = useFonts({
    'CroissantOne-Regular': require('./assets/fonts/CroissantOne-Regular.ttf'),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {

  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={[styles.text, { fontFamily: 'CroissantOne-Regular' }]}>Travel</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>Registro</Text>
          <Feather name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="name"
            onChangeText={(text) => handleChangeText(text, "names")}
            value={state.name}
          />
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={(text) => handleChangeText(text, "email")}
            value={state.email}
          />
          <Feather name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => handleChangeText(text, "password")}
            value={state.password}
            secureTextEntry={true}
          />
          <Button title="Register" onPress={onRegister} color="purple" />

          <Text style={styles.formFooter}>Alredy have an account?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.signIn}>Log in</Text>
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
  formFooter: {
    fontSize: 14,
    padding: 10,
    marginBottom: -10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signIn: {
    fontSize: 14,
    padding: 10,
    marginBottom: -10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
  },
  input: {
    height: 40,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
