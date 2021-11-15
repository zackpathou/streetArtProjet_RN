import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function Header () {        
        return (
            <View style={styles.header}>  
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>                
        );        
    }

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'center',  
        paddingBottom: 10,                
        paddingTop: 40,
        backgroundColor: '#fff'
    },
    logo: {
        height: 130, 
        width: 250
    },               
  });