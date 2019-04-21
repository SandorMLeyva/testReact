import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { nextStep, prevStep, setStep } from '../../actions/wizard_step';
import NameSong from './step1';
import AuthorSong from './step2';
import UploadTrack from './step3';
import { UploadSongFromDevice, UploadSongFromOther } from './step3xx';
import UploadImgTrack from './step4';
import { UploadImgFromDevice, UploadImgFromOther, UploadFromLink } from './step4xx';


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
                        <UploadSongFromDevice jump={this.props.setStep}></UploadSongFromDevice>
                    </View>
                )
            case 32:
                return (
                    <View>
                        <UploadSongFromOther jump={this.props.setStep}></UploadSongFromOther>
                    </View>
                )
            case 4:
                return (
                    <View>
                        <UploadImgTrack jump={this.props.setStep}></UploadImgTrack>
                    </View>
                )
            case 41:
                return (
                    <View>
                        <UploadImgFromDevice jump={this.props.setStep}></UploadImgFromDevice>
                    </View>
                )
            case 42:
                return (
                    <View>
                        <UploadImgFromOther jump={this.props.setStep}></UploadImgFromOther>
                    </View>
                )
            case 43:
                return (
                    <View>
                        <UploadFromLink jump={this.props.setStep}></UploadFromLink>
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