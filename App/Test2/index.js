import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/backgroundImage.jpg"
import square from "../assets/images/3.jpg";

export default class Test2 extends Component {
    constructor() {
        super();
        this.state = {
            window: Dimensions.get('window'),
            screens: [1, 2, 3],
            backgroundColor: 'transparent'
        }
    }

    hideImage = () => {
        this.setState({
            backgroundColor: '#77777755'
        });
    }
    showImage = () => {
        this.setState({
            backgroundColor: 'transparent'
        });
    }

    render() {
        const { width, height } = this.state.window;

        const backgroundColor = this.state.backgroundColor;

        const hideImage = this.hideImage;
        const showImage = this.showImage;



        return (
            <View style={{ height: '100%', width: '100%', position: 'relative', padding: 10 }}>
                <Image source={backgroundImage} style={{
                    position: 'absolute', left: 0,
                    top: 0,
                    width: width,
                    height: height
                }}
                    resizeMode='cover'
                    blurRadius={3}
                />
                <View style={{ flex: 3 }}>
                    <ScrollView style={{ paddingTop: 25 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.dialogDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </Text>

                        </View>
                        <View style={{ flex: 1, overflow: 'hidden', alignItems: 'center' }}>
                            <Image source={square} style={{ width: width - 140, height: width - 140 }} resizeMode='contain' />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ ...styles.dialogActions, backgroundColor: backgroundColor }}>
                    <TouchableOpacity style={{ flex: 2.8 }} onPress={() => alert("what's uuuup, bro")}>
                        <Text style={styles.textButton}>
                            Continuar
                        </Text>
                    </TouchableOpacity>
                    <TextInput placeholderTextColor='#f2f2f2'
                        placeholder="Introduzca el título"
                        style={{ flex: 1.2, borderColor: 'white', borderWidth: 2, minWidth: '80%', textAlign: 'right', paddingRight: 10 }}
                        onFocus={() => hideImage()}
                        onBlur={() => showImage()} />
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    textButton: {
        color: 'white',
        fontSize: 14,
        letterSpacing: 4.67,
        textTransform: 'uppercase'
    },
    dialogDescription: {
        color: 'white',
        borderLeftColor: 'white',
        borderLeftWidth: 1,
        paddingHorizontal: 10,
        fontSize: 18,
        paddingVertical: 20,
        fontFamily: "Segoeui",

    },
    dialogActions: {
        flex: 1,
        justifyContent: 'space-around',
        minHeight: 88,
        maxHeight: 120,
        alignItems: 'flex-end',
        borderRightColor: 'white',
        borderRightWidth: 1,
        paddingRight: 10,
        paddingVertical: 20,
    },
    xView: {
        backgroundColor: "white",
        flex: 1,
    },
    rectangle5Copy2Image: {
        resizeMode: "cover",
        backgroundColor: "transparent",
        height: 736,
    },
    lineasCostadosCopyImage: {
        resizeMode: "center",
        backgroundColor: "transparent",
        width: 2,
        height: 172,
    },
    continuemosAhoraDText: {
        backgroundColor: "transparent",
        color: "white",
        fontFamily: "SegoeUI-Light",
        fontSize: 18.33,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        alignSelf: "stretch",
    },
    deslizaLaListaYEText: {
        color: "white",
        fontFamily: "SegoeUI-Semilight",
        fontSize: 14.33,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        marginTop: 22,
    },
    seleccionImage: {
        resizeMode: "center",
        backgroundColor: "transparent",
        width: 8,
        height: 67,
        marginRight: 26,
        marginTop: 54,
    },
    lineasCostadosCopy3Image: {
        resizeMode: "cover",
        backgroundColor: "transparent",
        width: 4,
        height: 467,
    },
    copyView: {
        backgroundColor: "transparent",
        width: 330,
        height: 100,
    },
    groupCopy9Image: {
        backgroundColor: "transparent",
        resizeMode: "cover",
        height: 110,
    },
    bitmapImage: {
        resizeMode: "cover",
        backgroundColor: "transparent",
        height: 110,
    },
    rectangle2Image: {
        resizeMode: "cover",
        backgroundColor: "transparent",
        height: 110,
    },
    popText: {
        color: "white",
        fontFamily: "Segoeuisl",
        fontSize: 15.67,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        position: "absolute",
        left: 14,
        top: 39,
    },
    copyTwoView: {
        backgroundColor: "transparent",
        width: 330,
        height: 110,
        marginTop: 19,
    },
    bitmapTwoImage: {
        backgroundColor: "transparent",
        resizeMode: "cover",
        height: 110,
    },
    rectangle2CopyImage: {
        resizeMode: "cover",
        backgroundColor: "transparent",
        height: 110,
    },
    rockText: {
        backgroundColor: "transparent",
        color: "white",
        fontFamily: "SegoeUI-Semilight",
        fontSize: 15.67,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        position: "absolute",
        left: 14,
        top: 39,
    },
    copyThreeView: {
        backgroundColor: "transparent",
        width: 330,
        height: 110,
        marginBottom: 20,
    },
    bitmapThreeImage: {
        resizeMode: "cover",
        backgroundColor: "transparent",
        height: 110,
    },
    rectangle2CopyTwoImage: {
        backgroundColor: "transparent",
        resizeMode: "cover",
        height: 110,
    },
    bluesText: {
        color: "white",
        fontFamily: "SegoeUI-Semilight",
        fontSize: 15.67,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        backgroundColor: "transparent",
        position: "absolute",
        left: 14,
        top: 39,
    },
    copyFourView: {
        backgroundColor: "transparent",
        width: 330,
        height: 110,
    },
    bitmapFourImage: {
        backgroundColor: "transparent",
        resizeMode: "cover",
        height: 110,
    },
    rectangle2CopyThreeImage: {
        backgroundColor: "transparent",
        resizeMode: "cover",
        height: 110,
    },
    jazzText: {
        backgroundColor: "transparent",
        color: "white",
        fontFamily: "SegoeUI-Semilight",
        fontSize: 15.67,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "left",
        position: "absolute",
        left: 14,
        top: 39,
    },
});
