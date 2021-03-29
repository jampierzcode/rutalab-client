import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, Image, Text, Alert  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
    <Text style={styles.title}>RUTALAB</Text>  
      <Image
        style={styles.stretch}
        source={require('./assets/rutalab.jpeg')}
      />
      <Button
        style={styles.boton_inicio}
        title="Contratame"
        onPress={() => Alert.alert('Gracias bro xd!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontFamily: "sans-serif",
    textDecorationLine: "underline",
  },
  stretch:{
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  boton:{
    textAlign: 'center',
    width: '30%',
    height: 30,
    color: '#fff',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#000'
  },
});
