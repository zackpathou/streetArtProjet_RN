import * as React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export function DetailsScreen({ route }) {
    const { src, width, height, } = route.params;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;        
    const ratio = width / windowWidth;
    const calculatedHeight = height / ratio;

    return (
      <View style={{ flex: 1, alignItems: 'center',  justifyContent: 'center',alignSelf: 'center' }}>                              
        <ImageZoom cropWidth={windowWidth} cropHeight={windowHeight} imageWidth={windowWidth} imageHeight={calculatedHeight}>          
          <Image source={src} style={{ height: calculatedHeight, width: windowWidth, resizeMode: 'cover' }} />
        </ImageZoom>
        <View>

        </View>             
      </View>
    );
  }