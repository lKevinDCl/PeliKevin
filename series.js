import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaView, FlatList, StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

//const image = { uri: 'https://cdn.wallpapersafari.com/87/94/KQd0sw.jpg' };
const image = { uri: 'https://images.unsplash.com/photo-1629197521865-4946b4acd2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVyY2lvcGVsbyUyMGF6dWx8ZW58MHx8MHx8&w=1000&q=80' };

const data = require('./sample.json'); 

export default function Main(props) {
    const { navigation } = props;
    const [movies, setMovies] = useState([]);
    const [fontsLoaded] = useFonts({
        'CroissantOne-Regular': require('./assets/fonts/CroissantOne-Regular.ttf'),
    });

    useEffect(() => {

        const filteredMovies = data.entries.filter(
            (entry) => entry.programType === 'series' && entry.releaseYear >= 2010
        );

        const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));

        const slicedMovies = sortedMovies.slice(0, 20);

        setMovies(slicedMovies);
    }, []);

    if (!fontsLoaded) {
        return <Text>Cargando fuentes...</Text>;
    }

    const goToDetails = (item) => {
        navigation.navigate('details', { item });
    };

    const Item = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => goToDetails(item)}>
            <Image source={{ uri: item.images['Poster Art'].url }} style={styles.posterImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemGenre}>{item.genre}</Text>
                <Text style={styles.itemRating}>{item.rating} ⭐</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={[styles.text, { fontFamily: 'CroissantOne-Regular' }]}>Películas y series</Text>
                <SafeAreaView style={styles.itemList}>
                    <FlatList
  data={movies}
  renderItem={({ item }) => (
    <Item item={item} />
  )}
  keyExtractor={(item) => item.id}
/>

                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    itemList: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    itemGenre: {
        fontSize: 16,
        color: '#555',
    },
    itemRating: {
        fontSize: 16,
        color: '#555',
        textAlign: 'right',
    },
    text: {
        padding: 20,
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 16,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    posterImage: {
        width: 100, 
        height: 150, 
        borderRadius: 8,
        marginRight: 16, 
    },
    itemDetails: {
        flex: 1, 
    },
});