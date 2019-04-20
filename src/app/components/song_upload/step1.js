import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { songSetName } from '../../actions/index';



export class Step1NameSong extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: true,
            text: "hola test"
        }
    }

    render() {

        setTimeout(() => {
            this.setState(prevState => ({
                show: false
            }))
        }, 1000);

        if (this.state.show) {
            return(
                <View>
                    <Text>
                        Perfecto {this.props.name}, Empecemos.
                    </Text>
                </View>
            )                
        }
        else{
            return(
                <View>
                    <Text>
                        Introduce el nombre de la canción
                    </Text>
                    <TextInput style = {{
                        height: 40,
                        margin: 20,
                        padding:10,
                        borderColor: 'gray',
                        borderWidth: 1                        
                    }}
                    keyboardType='default'
                    placeholder='Nombre de la cancion'
                    onChangeText = { (text)=> this.setState(prevState =>{ return {text:text}}) }>
                    </TextInput>
                    <Button title="Continuar" onPress={()=> {
                        if(this.state.text==""){
                            alert("Introduzca un nombre");
                        }else{
                            this.props.songSetName(this.state.text);
                            this.props.next();
                        }
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


const mapStateToProps = state => {
    return {
        name: state.songSetName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        songSetName: params => {
            dispatch(songSetName(params));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1NameSong);
