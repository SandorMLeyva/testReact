import React, { Component } from 'react';
import { Text, ScrollViewComponent, ViewPagerAndroid, KeyboardAvoidingView, FlatList, View, Image, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/backgroundImage.jpg"
import square from "../assets/images/3.jpg"
import Statistic from "./statistics_disc"
import Distribution from "./distribution"
import LicenseDistribution from "./license"

import Video from "react-native-video"
import Video_ from "../assets/video.mp4"


export default class BackgroundVideo extends Component {

    render() {
        return (
            <View style={{backgroundColor: "black"}}>
                <Video
                    repeat
                    source={Video_}
                    resizeMode="cover"
                    style={StyleSheet.absoluteFill}
                />
                {this.props.children}
            </View>
        );
    }

}