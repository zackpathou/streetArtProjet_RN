import * as React from 'react';
import { Image } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';

export function TabBarIcon(routeName, focused, activeTintColor, inactiveTintColor, aboutIconInactive, aboutIconActive) {
    let color = focused ? activeTintColor : inactiveTintColor;    
    let size = (routeName == 'Intervention') ? 29:27;
    
    switch(routeName) {
        case 'Home':
          return <FontAwesome5 name="home" size={size} color={color} />;
        case 'Channel':
          return <FontAwesome name="youtube" size={size} color={color} />;
        case 'Photography':
          return <FontAwesome5 name="camera" size={size} color={color} />;
        case 'Map':
          return <FontAwesome5 name="map-marked" size={size} color={color} />
        case 'Intervention':
          return <Ionicons name="md-information-circle" size={size} color={color} />;
        case 'About':          
          return <AntDesign name="customerservice" size={size} color={color} />;
        default:
          return;
  }
}