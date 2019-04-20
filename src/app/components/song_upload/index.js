import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { nextStep, prevStep, setStep } from '../../actions/wizard_step';
import Step1NameSong from './step1';

/*

    Termianar de pasar las cosas para step1 y asi para cada elementodel wizard, que en este componente 
    solo queden los pasos del wizar y la interaccion entr ellos,
    si a un componente le hace falta datos de uno que ya paso, para eso esta redux, se puede obtener 
    sin problemas

*/

export class SongUpload extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         show: true,
    //         text: "hola test"
    //     }
    // }

    render() {

        switch (this.props.step.step) {
            case 0:
                return (
                    <View>
                        <Step1NameSong next={this.props.nextStep}></Step1NameSong>
                    </View>
                )
            case 1:
                return (
                    <View>
                        <Text onPress={() => { this.props.nextStep() }}>step1</Text>
                        <Text onPress={() => { this.props.prevStep() }}>step1</Text>

                    </View>
                )

            case 2:
                return (
                    <View>
                        <Text onPress={() => { this.props.prevStep() }} >step2</Text>

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