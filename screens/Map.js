import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './Details'
import photos from '../data/map.js'
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {GridItem} from '../components/GridItem';

const paddingElement = 5;
const paddingElementCount = 4;
const windowWidth = Dimensions.get('window').width - (paddingElement * paddingElementCount);
const numberElements = 2;
const widthElement = windowWidth / numberElements;
const heightElement = 170;

function MapScreen({ navigation }) { 
  
  const renderItem = ({ item }) => (
    <GridItem 
    item={item} 
    itemContainer={styles.itemContainer} 
    image={styles.image} 
    navigation={navigation}/>
  ); 

  const sort = (a, b) =>{    
    return b.order - a.order
  }

    return (
      <SafeAreaView style={styles.container}>
        <FlatGrid
            itemDimension={widthElement}        
            data={photos.sort(sort)}        
            style={{ flex: 1, padding: paddingElement }}
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
    image: {
      width: widthElement, 
      height:heightElement,
      resizeMode: "cover",
    },
    });

const MapStack = createStackNavigator();

export function MapStackScreen() {
    return (
      <MapStack.Navigator initialRouteName="Map">
        <MapStack.Screen name="Map" component={MapScreen} />
        <MapStack.Screen name="Details" component={DetailsScreen} />
      </MapStack.Navigator>
    );
  }