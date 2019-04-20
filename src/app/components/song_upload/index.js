import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { changeName } from '../../actions/index';


export class SongUpload extends Component {


    render() {

        return (
            <View>
                <Text onPress={() => { this.props.changeName("sokkk"); }}>
                    Perfecto {this.props.name} empecemos ahora
            </Text>
            <Text>
                Este es el linkde la navegacion
            </Text>
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
        state1: state.changeName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: params => {
            //import some action to excecute
            dispatch(changeName(params));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongUpload);