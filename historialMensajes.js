import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const image = { uri: 'https://i.pinimg.com/originals/8c/bc/55/8cbc55dd06b404fdc9df429be1381806.jpg' };

const messagesData = [
    { id: '1', text: '¡Hola!', sender: 'me' },
    { id: '2', text: '¡Hola! ¿Cómo estás?', sender: 'other' },
  
];


export default function HistorialMensajes() {
    const [messages, setMessages] = useState(messagesData);
    const [inputText, setInputText] = useState('');

    const flatListRef = useRef();

    const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'me' ? styles.sentMessage : styles.receivedMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
    </View>
    );

    const sendMessage = () => {
    if (inputText.trim() !== '') {
        const newMessage = {
        id: String(Math.random()),
        text: inputText,
        sender: 'me',
        };
        setMessages([...messages, newMessage]);
        setInputText('');
        setTimeout(() => {
        flatListRef.current.scrollToEnd({ animated: true });
        }, 100);
    }
    };

    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
        <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        />
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            placeholder="Escribe un mensaje..."
            onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14213E',
        position: 'relative',
      },
      

  messagesList: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  messageContainer: {
    maxWidth: '70%',
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#14213E',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
    backgroundColor: '#C6DFFF',
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#18515C',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    flex: 0.05,
    paddingBottom: 20, 
},
});
