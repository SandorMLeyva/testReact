import React, { Component } from 'react';
import { Text, ScrollViewComponent, ViewPagerAndroid, KeyboardAvoidingView, FlatList, View, Image, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/backgroundImage.jpg"
import square from "../assets/images/3.jpg"
import Statistic from "./statistics_disc"
import Distribution from "./distribution"
import LicenseDistribution from "./license"
import BackgroundVideo from "./backVideo"

// import a from "ani"


export default class Test2 extends Component {

    constructor() {
        super()
        this.state = {
            show: {},
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


            ]
        }
    }


    showHide_details = (index) => {
        this.state.show[index] = (this.state.show[index] === undefined || !this.state.show[index]) ? true : false;
        this.setState({
            show: this.state.show,
            data: this.state.data
        });
    }

    flatList_item = ({ item, index }) => {
        console.log(this.state);



        return (

            <View style={{ backgroundColor: 'trasparent' }} key={index}>
                <TouchableOpacity style={styles.header} onPress={() => { this.showHide_details(index) }}>
                    <View styles={styles.content}>
                        <Text>{item.name}</Text>
                        <Text>Descripcion de algo</Text>
                    </View>
                    <Text style={styles.icon}>Fig Der</Text>
                </TouchableOpacity>
                <View style={styles.details}>
                    <Text>Aqui va todo lo otro</Text>
                    {/*TODO: buscar el componente de las pestannas, por ahora se resuelve con el scroll horizontal */}
                    <ScrollView horizontal>
                        <View style={{ width: Dimensions.get('window').width }}>
                            <Text>Estadisticas</Text>
                            <Statistic title="Apple Music"></Statistic>
                            <Statistic title="Spotify"></Statistic>
                        </View>
                        <View style={{ width: Dimensions.get('window').width - 5 }}>
                            <Text>Distribucion</Text>
                            <Distribution></Distribution>
                        </View>
                        <View style={{ width: Dimensions.get('window').width }}>
                            <LicenseDistribution></LicenseDistribution>
                        </View>
                    </ScrollView>

                </View>
            </View>

        );

    }

    flatList_separator = () => {
        return <View><Text>-------------------</Text></View>
    }

    render() {
        return (
            <BackgroundVideo>
                <View style={styles.listStatistics}>
                    <Text>List</Text>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.flatList_item}
                        ItemSeparatorComponent={this.flatList_separator}
                    ></FlatList>
                </View>
            </BackgroundVideo>


        );
    }
}

var styles = {
    listStatistics: {
        marginBottom: 100,
    },
    content: {
        flex: 1,
    },
    icon: {
        alignItems: 'flex-end',
        textAlign: "right",
        marginTop: 8,
        flex: 1,
    },
    header: {
        marginLeft: 15,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        flex: 1,
    },
    details: {
        marginLeft: 5,
    }
}