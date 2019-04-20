import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { songSetName } from '../../actions/index';
import {GLOBAL_TIME_ANIMATION} from '../../config';



export class UploadTrack extends Component {

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
                        Nos quieres enviar el archivo de audio ?
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
                    
                    <Button title="Cargar Archivo" onPress={() => {

                        // this.props.next();
                        this.props.jump(31);

                    }}></Button>
                    <Button title="Pedir Archivo a Otro " onPress={() => {
                        this.props.jump(32);

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

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrack);
