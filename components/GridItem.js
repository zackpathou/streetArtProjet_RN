import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export class GridItem extends React.PureComponent {
    render () {
        return (
            <View style={this.props.itemContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
                    src: this.props.item.src,
                    width: this.props.item.width,
                    height: this.props.item.height
                })}>
                <Image style={this.props.image} source={this.props.item.srcThumb}/>
                </TouchableOpacity>                                                                           
            </View>
        );
    }
}