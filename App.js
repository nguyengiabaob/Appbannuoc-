import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './components/cart';
import Dangnhap from './components/dangnhap';
import Home from './components/Home';
import Mainscreen from './components/mainscrren';
import Router_ from './router';


export default function App() {
  return (
    
    //<View style={styles.container}>
       
        <Router_ />
        
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    