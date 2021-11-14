import React , {useState} from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DetailsScreen } from './Details'
import { createStackNavigator } from '@react-navigation/stack';
import photos from '../data/photography.js'
import { FlatGrid } from 'react-native-super-grid';
import {GridItem} from '../components/GridItem';

const paddingElement = 5;
const paddingElementCount = 4;
const windowWidth = Dimensions.get('window').width - (paddingElement * paddingElementCount);
const numberElements = 2;
const widthElement = windowWidth / numberElements;
const heightElement = 170;


function PhotographyScreen({ navigation }) {   
  const [category,setCategory] = useState('all');  

  const renderItem = ({ item }) => (
    <GridItem 
              item={item} 
              itemContainer={styles.itemContainer} 
              image={styles.image} 
              navigation={navigation}/>
  ); 

  const filter = (photo) => {  
    if (category === 'all')
      return photo;
    else
      return photo.category === category
  }

  const sort = (a, b) =>{    
    return b.order - a.order
  }
  
  const gridData = React.useMemo(() => photos.filter(filter).sort(sort), [category]);

  const countDropDownItems = (value) => { 
    if(value === 'all')
      return photos.length;
    else
      return photos.filter((photo) => { return photo.category === value; }).length;
  }
 
  const getdropDownItems = () => { 
      return [
        {label: `All Photos (${countDropDownItems('all')})` , value: 'all'},
        {label: `BAMBI (${countDropDownItems('BAMBI')})`, value: 'BAMBI'},
        {label: `CHICKY (${countDropDownItems('CHICKY')})`, value: 'CHICKY'},
        {label: `CAL (${countDropDownItems('CAL')})`, value: 'CAL'},
        {label: `CHIENPO (${countDropDownItems('CHIENPO')})`, value: 'CHIENPO'},
        {label: `CHUFY (${countDropDownItems('CHUFY')})`, value: 'CHUFY'},
        {label: `EAGLE (${countDropDownItems('EAGLE')})`, value: 'EAGLE'},
        {label: `JENA (${countDropDownItems('JENA')})`, value: 'JENA'},
        {label: `JUNE (${countDropDownItems('JUNE')})`, value: 'JUNE'},
        {label: `LOODZ (${countDropDownItems('LOODZ')})`, value: 'LOODZ'},
        {label: `PONCE (${countDropDownItems('PONCE')})`, value: 'PONCE'},
    ];
  }

  const dropDownItems = React.useMemo(() => getdropDownItems(), []);

    return (
      <SafeAreaView style={styles.container}>        
        <DropDownPicker
            items={dropDownItems}
            placeholder="Select a project"
            dropDownMaxHeight={300}
            defaultValue={category}
            containerStyle={{height: 50,marginBottom:0}}
            style={{backgroundColor: '#ffff'}}
            selectedLabelStyle={{color: '#000000', fontSize:16}}
            activeItemStyle={{backgroundColor: 'rgba(0,0,0,0.1)'}}
            itemStyle={{ justifyContent: 'flex-start', paddingLeft:10, height: 40 }}
            dropDownStyle={{backgroundColor: '#ffff'}}
            onChangeItem={item => setCategory(item.value)}
        />        
        <FlatGrid
            itemDimension={widthElement}        
            data={gridData}        
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

export const PhotographyStack = createStackNavigator();

export function PhotographyStackScreen() {
  return (
    <PhotographyStack.Navigator initialRouteName="Photography">
      <PhotographyStack.Screen name="Photography" component={PhotographyScreen} />
      <PhotographyStack.Screen name="Details" component={DetailsScreen} />
    </PhotographyStack.Navigator>
  );
}