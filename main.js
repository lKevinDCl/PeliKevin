import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Asumiendo que estás utilizando expo

const HomeScreen = ({ navigation }) => {
  const goToMovies = () => {
    navigation.navigate('Peliculas');
  };

  const goToSeries = () => {
    navigation.navigate('Series');
  };

  const backgroundImg = { uri: 'https://cdn.wallpapersafari.com/87/94/KQd0sw.jpg' };
  const buttonScale = new Animated.Value(1);

  const handleButtonPress = (buttonType) => {
    Animated.sequence([
      Animated.timing(buttonScale, { toValue: 1.2, duration: 100, useNativeDriver: false }),
      Animated.timing(buttonScale, { toValue: 1, duration: 100, useNativeDriver: false }),
    ]).start(() => {
      if (buttonType === 'movies') {
        goToMovies();
      } else if (buttonType === 'series') {
        goToSeries();
      }
    });
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.appTitle}>PeliKevin</Text>
        <Text style={styles.subtitle}>Descubre tu próxima película o serie favorita</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.moviesButton]}
            onPress={() => handleButtonPress('movies')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="film" size={24} color="#FFFFFF" />
            <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
              Ver Películas
            </Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.seriesButton]}
            onPress={() => handleButtonPress('series')}
            activeOpacity={0.7}
          >
            <FontAwesome5 name="tv" size={24} color="#FFFFFF" />
            <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
              Ver Series
            </Animated.Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#900C3F',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginRight: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },
  moviesButton: {
    backgroundColor: '#E50914', 
  },
  seriesButton: {
    backgroundColor: '#007BFF',
  },
});

export default HomeScreen;
