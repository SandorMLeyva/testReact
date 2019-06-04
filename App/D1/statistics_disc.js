import React, { Component } from 'react';
import { Text, ViewPagerAndroid, DeviceEventEmitter, KeyboardAvoidingView, FlatList, View, Image, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/group-copy-3x.png"
export default class Statistic extends Component {
    constructor() {
        super();
        this.state = {
            dimensions: Dimensions.get('window'),
        }
    }


    render() {
        return (
            // TODO: el efecto del touchable opacity hay q disminuirlo
                <TouchableOpacity style={styles.container}>
                    <Image source={backgroundImage} style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: 98.8,
                        width: this.state.dimensions.width - 46,
                        resizeMode: 'stretch'    
                    }}
                    blurRadius={3}
                    />
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>
        );
    }
}

styles = {
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#c6a51f',
        height: 100
    },
    title:{
        color: 'white',
        marginTop: 5,
        textTransform:'uppercase',
		fontFamily: "Segoeui",
        

    },
}