import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./login";
import Register from './register';
import Main from './main';
import CambiarImagen from './cambiarImagen';
import historialMensajes from './historialMensajes';
import Peliculas from './peliculas';
import Series from './series';

const Stack = createNativeStackNavigator();

export default function App() {
  const [num, setNum] = useState(2);

  useEffect(
    function () {

    },
    []
  );


  const CustomHeader = ({ navigation, route }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>PeliKevin</Text>
        <View style={styles.headerLinks}>
          {route.name === "Main" && (
            <>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.headerLink}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={[styles.headerLink, styles.registerLink]}>Registrarse</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };


  const CustomFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 KevinDiegoCruz 5C</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomHeader {...props} />,
          }}
        >
          <Stack.Screen name="Main" options={{ headerShown: true, footerShown: false }} component={Main} />
          <Stack.Screen name="Peliculas" options={{ headerShown: false }} component={Peliculas} />
          <Stack.Screen name="Series" options={{ headerShown: false }} component={Series} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
          <Stack.Screen name="cambiarImagen" options={{ headerShown: false }} component={CambiarImagen} />
          <Stack.Screen name="historialMensajes" options={{ headerShown: false }} component={historialMensajes} />
        </Stack.Navigator>
        {/* Agregar el Footer */}
        <CustomFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111111',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLink: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 20,
    textDecorationLine: 'underline',
  },
  registerLink: {
    marginRight: 20,
  },
  footer: {
    backgroundColor: '#111111',
    padding: 5,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
});
