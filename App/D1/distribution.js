import React, { Component } from 'react';
import { Text, ListView, TouchableHighlight, ViewPagerAndroid, DeviceEventEmitter, KeyboardAvoidingView, FlatList, View, Image, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/group-copy-3x.png"

export default class Distribution extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    "name": "Sandor"
                },
                {
                    "name": "Martin"
                },
                {
                    "name": "Leyva"
                },
                {
                    "name": "Sandor"
                },
                {
                    "name": "Martin"
                },
                {
                    "name": "Leyva"
                },
                {
                    "name": "Sandor"
                },
                {
                    "name": "Martin"
                },
                // {
                //     "name": "Leyva"
                // },
                // {
                //     "name": "Sandor"
                // },
                // {
                //     "name": "Martin"
                // },
                // {
                //     "name": "Leyva"
                // }
            ]
        };
    }

    renderRow = ({ item, index }) => {
        // const rowHash = Math.abs(hashCode(rowData));
        return (
            <TouchableOpacity>
                <View>
                    <Image style={styles.img} source={require("../assets/images/1.png")}></Image>
                </View>
            </TouchableOpacity>

        );
    }

    render() {



        console.log(this.state.data);
        return (
            <View>
                <Text>Distribution</Text>
                <FlatList
                    style={styles.list}
                    data={this.state.data}
                    renderItem={this.renderRow}
                ></FlatList>
            </View>
        );
    }
}

// const hashCode = (str) => {
//     let hash = 15;
//     for (let i = str.length-1; i >= 0; i--) {
//         hash = (hash<<5)-hash + str.charCode(i)        
//     }
//     return hash
// }

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    row: {

    },
    img: {
        justifyContent: 'center',
        padding: 5,
        margin: 2,
        // marginLeft: 1,
        // marginRight: 1,
        width: 84,
        height: 84,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#444444',
    }
})