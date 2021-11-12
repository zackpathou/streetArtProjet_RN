import * as React from 'react';
import { Image, View, StyleSheet, Text, Dimensions } from 'react-native';
import {Header} from '../components/Header'

export function AboutScreen({ navigation }) {    
    return (
      <View style={styles.container}>
          <Header />    
          <Image style={styles.image} source={require('../assets/portrait.jpg')} />
          <View style={styles.blockquote}>            
            <Text style={styles.quotation}>
              Soyez vous meme, tous les autres sont déjà prise               
            </Text>              
            <Text style={styles.footer}>— Alban & Zack</Text>        
          </View>        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
    }, 
    quotation: {
      fontSize:25,      
      color: 'gray',  
      textAlign: 'center', 
      lineHeight: 30,         
    },   
    footer: {
      textAlign: 'right',
      color: 'gray',
      fontStyle: 'italic',
      fontSize:20,  
    }, 
    blockquote: {
      padding: 10,      
    },               
    image: {
      flex: 1,             
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,     
      width: Dimensions.get('window').width
 }
  });
