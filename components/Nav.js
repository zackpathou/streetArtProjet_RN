import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home'
import { InterventionStackScreen } from '../screens/Intervention'
import { PhotographyStackScreen } from '../screens/Photography'
import { MapStackScreen } from '../screens/Map'
import { AboutScreen } from '../screens/About'
import { TabBarIcon } from './TabBarIcon'

const Tab = createBottomTabNavigator();
const activeTintColor = 'rgb(89, 128, 218)';
const inactiveTintColor = 'gray';

export function Nav () {        
        return (
            <View style={styles.container} >            
                <NavigationContainer>                                       
                    <Tab.Navigator                        
                        initialRouteName="Home"
                        tabBarOptions={{    activeTintColor: activeTintColor, 
                                            inactiveTintColor: inactiveTintColor, 
                                            style:{height:50}, 
                                            tabStyle: {
                                                height: 50,                                                
                                              },                                      
                                            showIcon : true, 
                                            showLabel : false }}        
                        screenOptions={({ route }) =>  ({ 
                                tabBarIcon: ({ focused }) => (TabBarIcon(   route.name, 
                                                                        focused, 
                                                                        activeTintColor, 
                                                                        inactiveTintColor,
                                                                        styles.aboutIconInactive,
                                                                        styles.aboutIconActive)),})}       
                    >
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Intervention" component={InterventionStackScreen} />
                        <Tab.Screen name="Photography" component={PhotographyStackScreen}/>
                        <Tab.Screen name="Map" component={MapStackScreen} />                        
                        <Tab.Screen name="About" component={AboutScreen} />                                             
                    </Tab.Navigator>                                                                
                </NavigationContainer>                
            </View>
        );        
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    header: {
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'center',  
        paddingBottom: 10,                
        marginTop: 40
    },
    logo: {
        height: 21, 
        width: 136
    },  
    aboutIconInactive: {
        height: 35, 
        width: 35,
    }, 
    aboutIconActive: {
      height: 35, 
      width: 35, 
      borderRadius: 25,  
      borderWidth: 2, 
      borderColor: activeTintColor
  },             
  });