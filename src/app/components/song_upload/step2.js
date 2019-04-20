import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


export default class AuthorSong extends Component {

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

                    this.props.next();

                }}></Button>
                <Button title="No" onPress={() => {
                    alert("ver que se hace cuando se marque no");
                    //this.props.jump(0);

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
//         name: state.songSetName
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         songSetName: params => {
//             dispatch(songSetName(params));
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AuthorSong);
