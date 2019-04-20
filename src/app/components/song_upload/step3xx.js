import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import {songSetEmailLocator, songSetPhoneLocator} from '../../actions/index';


class UploadFromDevice_ extends Component {

    _isMounted = true;
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <View>
                
                <Button title="upload"></Button>
                <Button title="Continuar" onPress={() => {
                    
                    // this.props.songSetName(this.state.text);
                    alert("ver como se suben archivos al servidor");
                    this.props.jump(4);
                    
                }}></Button>
            </View>
        )
    }
}


class UploadFromOther_ extends Component {

    _isMounted = true;
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phone: ""
        }
    }

    
    render() {
        return (
            <View>
                
                <TextInput style={{
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                        keyboardType='default'
                        placeholder='Email'
                        onChangeText={(text) => this.setState(prevState => { return { email: text } })}>
                    </TextInput>

                    <TextInput style={{
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                        keyboardType='default'
                        placeholder='Telefono'
                        onChangeText={(text) => this.setState(prevState => { return { phone: text } })}>
                    </TextInput>

                <Button title="Continuar" onPress={() => {
                    
                    if(this.state.phone != ""){
                        this.props.songSetPhoneLocator(this.state.phone);
                    }
                    if(this.state.email != ""){
                        this.props.songSetEmailLocator(this.state.email);
                    }
                    if(this.state.email == "" && this.state.phone == ""){
                        alert("Rellena uno de los 2 campos");
                    }else{
                        this.props.jump(4);
                    }
                    
                }}></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    msg: {
        color: 'black',
    }
});


const mapStateToProps = state => {
    return {
        email: state.songSetEmailLocator,
        phone: state.songSetPhoneLocator
    }
};

const mapDispatchToProps = dispatch => {
    return {
        songSetEmailLocator: params => {
            dispatch(songSetEmailLocator({
                email:params,
                upload_state: 32
            }));
        },
        songSetPhoneLocator: params => {
            dispatch(songSetPhoneLocator({
                phone: params,
                upload_state: 32
            }));
        }
    }
};

export const UploadFromDevice = connect(mapStateToProps, mapDispatchToProps)(UploadFromDevice_);
export const UploadFromOther = connect(mapStateToProps, mapDispatchToProps)(UploadFromOther_);
