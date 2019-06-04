import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import {songSetAuthor} from '../../actions';

export class AuthorSong extends Component {

    _isMounted = true;
    constructor(props) {
        super(props);

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        return (
            <View>
                <Text>
                    Esta cancion es de tu autoria
                </Text>

                <Button title="Si" onPress={() => {
                    this.props.songSetAuthor(true);
                    this.props.next();

                }}></Button>
                <Button title="No" onPress={() => {
                    this.props.songSetAuthor(false);
                    this.props.next();                    
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
        // name: state.songSetName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        songSetAuthor: params => {
            dispatch(songSetAuthor({
                author: params,
                upload_state: 3
            }));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorSong);
