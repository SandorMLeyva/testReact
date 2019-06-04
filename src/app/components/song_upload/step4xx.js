import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { imgSetEmailLocator, imgSetLinkLocator, imgSetPhoneLocator } from '../../actions/index';
import { GLOBAL_TIME_ANIMATION } from '../../constants/const';


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

                    alert("ver como se suben archivos al servidor");
                    this.props.jump(5);

                }}></Button>
            </View>
        )
    }
}


class UploadFromOther_ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phone: "",
            willEnd: false
        }
    }


    render() {

        if (this.state.willEnd) {
            console.log(this.state);
            
            setTimeout(() => {
                this.props.jump(5);
            }, 500);
            //TODO: ver pq cuando le paso la variable para el tiempo no funciona bien

            return (
                <View>
                    <Text>{this.props.user_name}, podemos seguir configurando tu nueva canción en lo que esperamos</Text>
                </View>
            )
        }
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

                    if (this.state.phone != "") {
                        this.props.imgSetPhoneLocator(this.state.phone);
                    }
                    if (this.state.email != "") {
                        this.props.imgSetEmailLocator(this.state.email);
                    }
                    if (this.state.email == "" && this.state.phone == "") {
                        alert("Rellena uno de los 2 campos");
                    } else {

                        this.setState(prevState => ({ 
                            willEnd: true 
                        }));                        
                    }

                }}></Button>
            </View>
        )
    }
}


class UploadFromLink_ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link: "",
            willEnd: false
        }
    }


    render() {

        // if (this.state.willEnd) {
            
        //     setTimeout(() => {
        //         this.props.jump(5);
        //     }, 500);
        //     //TODO: ver pq cuando le paso la variable para el tiempo no funciona bien

        //     return (
        //         <View>
        //             <Text>{this.props.user_name}, podemos seguir configurando tu nueva canción en lo que esperamos</Text>
        //         </View>
        //     )
        // }
        return (
            <View>

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType='url'
                    placeholder='Link de la imagen'
                    onChangeText={(text) => this.setState(prevState => { return { link: text } })}>
                </TextInput>

           
                <Button title="Continuar" onPress={() => {

                    if (this.state.phone != "") {
                        this.props.imgSetLinkLocator(this.state.phone);
                        this.setState(prevState => ({ 
                            willEnd: true 
                        }));      
                        alert("Tomar la imgen subirla al server y esperar a que este me responda con un link de la imagen ya procesada");                  

                    }else{
                        alert("introduzca un link");
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
        song_email: state.setMetadataSong.song_email_locator,
        song_phone: state.setMetadataSong.song_phone_locator,
        img_link: state.setMetadataSong.img_link_locator,
        img_phone: state.setMetadataSong.img_phone_locator,
        img_email: state.setMetadataSong.img_email_locator,
        upload_state: state.setMetadataSong.upload_state,
        user_name: state.user.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        imgSetEmailLocator: params => {
            dispatch(imgSetEmailLocator({
                img_email_locator: params,
                upload_state: 4
            }));
        },
        imgSetPhoneLocator: params => {
            dispatch(imgSetPhoneLocator({
                img_phone_locator: params,
                upload_state: 4
            }));
        },
        imgSetLinkLocator: params => {
            dispatch(imgSetPhoneLocator({
                img_link_locator: params,
                upload_state: 4
            }));
        }
    }
};

export const UploadImgFromDevice = connect(mapStateToProps, mapDispatchToProps)(UploadFromDevice_);
export const UploadImgFromOther = connect(mapStateToProps, mapDispatchToProps)(UploadFromOther_);
export const UploadFromLink = connect(mapStateToProps, mapDispatchToProps)(UploadFromLink_);
