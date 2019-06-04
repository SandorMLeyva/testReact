import React, { Component } from 'react';
import { Text, ListView, TouchableHighlight, ViewPagerAndroid, DeviceEventEmitter, KeyboardAvoidingView, FlatList, View, Image, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/group-copy-3x.png"

export default class LicenseDistribution extends Component {
    constructor() {
        super();
        this.state = {
            license: {
                text0: 'Podemos ver que el código generado es más ineﬁciente que el código que se podríaconcebirmanualmente.Esteesunresultadonecesariodelhechodesubir de nivel de abstracción. Un programador humano escribiendo directamente CILprobablemetnepuedagenerarcódigomáseﬁcientequenuestrocompilador de COOL (al menos hasta que comencemos a aplicar técnicas de optimización de código), pero la ganancia en productividad es tal, que no tiene sentido tal comparación.',
                text1: 'Licencias Sincronizadas',
                text2: 'OROS Media',
                percent: 80

            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'white'}}>{this.state.license.text0}</Text>
                <View style={styles.footer}>
                    <Text style={{color: 'white'}}>{this.state.license.text1}</Text>
                    <Text style={{color: 'white'}}>{this.state.license.text2}</Text>
                    <Text style={{color: 'white'}}>{this.state.license.percent}%</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    container: {
        margin: 10
    }
}); 