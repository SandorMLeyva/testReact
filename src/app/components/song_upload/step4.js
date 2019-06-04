import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {GLOBAL_TIME_ANIMATION} from '../../config';



export default class UploadImgTrack extends Component {

    _isMounted = true;
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        setTimeout(() => {
            if (this._isMounted) {
                this.setState(prevState => ({
                    show: false
                }))
            }
        }, GLOBAL_TIME_ANIMATION);


        if (this.state.show) {
            return (
                <View>
                    <Text>
                     Envianos la ilustración de su nuevo tema, recuerda que las dimensiones deben 
                     ser 1:1 y la resolución minima debe der 1000 x 1000 
                    </Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Button title="Cargar Archivo" onPress={() => {
                        this.props.jump(41);
                    }}></Button>
                    <Button title="Pedir Archivo a Otro" onPress={() => {
                        this.props.jump(42);
                    }}></Button>
                    <Button title="Introducir link" onPress={() => {
                        this.props.jump(43);
                    }}></Button>
                </View>
            )

        }

    }
}



const styles = StyleSheet.create({
    msg: {
        color: 'black',
    }
});


