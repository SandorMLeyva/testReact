import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { songSetName } from '../../actions/index';
import {GLOBAL_TIME_ANIMATION} from '../../config';


export class NameSong extends Component {

    _isMounted = true;
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            text: ""
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
                        Perfecto {this.props.nameArtist}, Empecemos.
                    </Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text>
                        Introduce el nombre de la canción
                    </Text>
                    <TextInput style={{
                        height: 40,
                        margin: 20,
                        padding: 10,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                        keyboardType='default'
                        placeholder='Nombre de la cancion'
                        onChangeText={(text) => this.setState(prevState => { return { text: text } })}>
                    </TextInput>
                    <Button title="Continuar" onPress={() => {
                        if (this.state.text == "") {
                            alert("Introduzca un nombre");
                        } else {
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
            dispatch(songSetName({
                name: params,
                upload_state: 1
            }));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSong);
