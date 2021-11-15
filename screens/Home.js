import * as React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, ImageBackground, Dimensions  } from 'react-native';
import photos from '../data/home.js'
import { FlatGrid } from 'react-native-super-grid';
import {Header} from '../components/Header'

const paddingElement = 5;
const paddingElementCount = 4;
const windowWidth = Dimensions.get('window').width - (paddingElement * paddingElementCount);
const numberElements = 2;
const widthElement = windowWidth / numberElements;
const heightElement = 170;

export function HomeScreen({ navigation }) { 
 
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => {navigation.navigate(item.linkTo)}}>
        <ImageBackground style={styles.imageBackground} source={item.src}>
              <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>                
      </TouchableOpacity>
    </View>
  ); 
  
  return (
    <SafeAreaView style={styles.container}> 
        <Header />    
        <FlatGrid
            itemDimension={widthElement}        
            data={photos}        
            style={{flex: 1, padding: paddingElement}}
            spacing={0}
            renderItem={renderItem}
        />    
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',  
      marginTop: 10, 
      width: widthElement, 
      height:heightElement,      
    },    
    imageBackground: {
      width: widthElement, 
      height:heightElement,
      resizeMode: "cover",
    },
    text: {
      color: "#fff", 
      backgroundColor: 'rgba(0,0,0,0.4)',
      textAlign: 'center',
      width: widthElement,
      padding:2,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
  });