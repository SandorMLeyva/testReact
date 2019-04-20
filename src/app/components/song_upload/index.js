import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { nextStep, prevStep, setStep } from '../../actions/wizard_step';
import NameSong from './step1';
import AuthorSong from './step2';
import UploadTrack from './step3';
import { UploadFromDevice, UploadFromOther } from './step3xx';

/*

    Termianar de pasar las cosas para step1 y asi para cada elementodel wizard, que en este componente 
    solo queden los pasos del wizar y la interaccion entr ellos,
    si a un componente le hace falta datos de uno que ya paso, para eso esta redux, se puede obtener 
    sin problemas

*/

export class SongUpload extends Component {


    render() {

        switch (this.props.step.step) {
            case 1:
                return (
                    <View>
                        <NameSong next={this.props.nextStep} nameArtist={"Sandor"}></NameSong>
                    </View>
                )
            case 2:
                return (
                    <View>
                        <AuthorSong next={this.props.nextStep} jump={this.props.setStep}></AuthorSong>
                    </View>
                )

            case 3:
                return (
                    <View>
                        <UploadTrack jump={this.props.setStep}></UploadTrack>
                    </View>
                )
            case 31:
                return (
                    <View>
                        <UploadFromDevice jump={this.props.setStep}></UploadFromDevice>
                    </View>
                )
            case 32:
                return (
                    <View>
                        <UploadFromOther jump={this.props.setStep}></UploadFromOther>
                    </View>
                )
            default:
                return (
                    <View>
                        <Text>default</Text>
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
        step: state.wizardStep
    }
};

const mapDispatchToProps = dispatch => {
    return {
        nextStep: () => {
            dispatch(nextStep());
        },
        prevStep: () => {
            dispatch(prevStep());
        },
        setStep: (param) => {
            dispatch(setStep(param));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongUpload);