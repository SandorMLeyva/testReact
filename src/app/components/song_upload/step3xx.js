import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
// import { connect } from 'react-redux';


export class UploadFromDevice extends Component {

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


export class UploadFromOther extends Component {

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
                    
                    // this.props.songSetName(this.state.text);
                    if(this.state.phone != ""){
                        alert("subir telefono con redux");
                    }
                    if(this.state.email != ""){
                        alert("subir email con redux");
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


// const mapStateToProps = state => {
//     return {
//         // name: state.songSetName
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         // songSetName: params => {
//         //     // dispatch(songSetName(params));
//         // }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NameSong);
