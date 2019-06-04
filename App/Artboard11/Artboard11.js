//
//  Artboard11
//  123
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from 'react'
import { TouchableOpacity, Animated, Easing, Text, TextInput, StyleSheet, Image, View } from 'react-native'
import { strings } from './../Locales/i18n'


export default class Artboard11 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			textFieldTextInput: new Animated.Value(-1),
			textFieldTextInputOpacity: new Animated.Value(1),
			wizzardCancionSaludoInicialTextOpacity: new Animated.Value(-1),
			wizzardCancionSaludoInicialTextTranslateY: new Animated.Value(-1),
			wizzardCancionSaludoInicialText: new Animated.Value(0.01),
			wizzardCancionPreguntaTituloTextOpacity: new Animated.Value(1),
			wizzardCancionPreguntaTituloText: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
		this.startAnimationOne()
	}

	startAnimationOne() {
	
		// Set animation initial values to all animated properties
		this.state.wizzardCancionSaludoInicialTextOpacity.setValue(0)
		this.state.wizzardCancionSaludoInicialTextTranslateY.setValue(0)
		this.state.wizzardCancionPreguntaTituloTextOpacity.setValue(0)
		this.state.wizzardCancionPreguntaTituloText.setValue(0)
		this.state.textFieldTextInput.setValue(0)
		this.state.textFieldTextInputOpacity.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.wizzardCancionSaludoInicialTextOpacity, {
			duration: 4050,
			easing: Easing.bezier(0.22, 0.61, 0.36, 1),
			toValue: 1,
		}), Animated.timing(this.state.wizzardCancionSaludoInicialTextTranslateY, {
			duration: 2850,
			delay: 1200,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		}), Animated.timing(this.state.wizzardCancionSaludoInicialText, {
			duration: 4050,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 0.01,
		})], {
			delay: 750,
		}), Animated.parallel([Animated.timing(this.state.wizzardCancionPreguntaTituloTextOpacity, {
			duration: 2000,
			delay: 3149,
			easing: Easing.bezier(0.18, 1, 0, 1),
			toValue: 1,
		}), Animated.timing(this.state.wizzardCancionPreguntaTituloText, {
			duration: 3150,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		})]), Animated.parallel([Animated.timing(this.state.textFieldTextInput, {
			duration: 3650,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		}), Animated.timing(this.state.textFieldTextInputOpacity, {
			duration: 550,
			delay: 3600,
			easing: Easing.bezier(0.42, 0, 0.58, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <View
				style={styles.artboard11View}>
				<Image
					style={styles.imageImage}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 303,
						top: 214,
						height: 164,
						alignItems: "center",
					}}>
					<Animated.View
						style={[{
							opacity: this.state.wizzardCancionSaludoInicialTextOpacity.interpolate({
								inputRange: [-1, 0, 0.2, 0.69, 0.92, 1],
								outputRange: [0, 0, 1, 1, 0.1, 0],
							}),
							transform: [{
								translateY: this.state.wizzardCancionSaludoInicialTextTranslateY.interpolate({
									inputRange: [-1, 0, 0.5, 1],
									outputRange: [0.01, 0, -35, -35],
								}),
							}],
						}, styles.wizzardCancionSaludoInicialTextAnimated]}>
						<Text
							style={styles.wizzardCancionSaludoInicialText}>{strings("Artboard11.wizzardCancionSaludoInicialText")}</Text>
					</Animated.View>
					<Animated.View
						style={[{
							
							opacity: this.state.textFieldTextInputOpacity,
						}, styles.textFieldTextInputAnimated]}>
						<TextInput
							clearButtonMode="always"
							autoCorrect={false}
							placeholder="Titulo"
							style={styles.textFieldTextInput}/>
					</Animated.View>
					<TouchableOpacity
						style={styles.buttonButton}>
						<Text
							style={styles.buttonButtonText}>{strings("Artboard11.buttonButton")}</Text>
					</TouchableOpacity>
				</View>
				<Animated.View
					style={[{
						opacity: this.state.wizzardCancionPreguntaTituloTextOpacity,
						
					}, styles.wizzardCancionPreguntaTituloTextAnimated]}>
					<Text
						style={styles.wizzardCancionPreguntaTituloText}>{strings("Artboard11.wizzardCancionPreguntaTituloText")}</Text>
				</Animated.View>
			</View>
	}
}

const styles = StyleSheet.create({
	artboard11View: {
		backgroundColor: "white",
		flex: 1,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "rgba(7, 2, 2, 0.96)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	wizzardCancionSaludoInicialText: {
		color: "white",
		fontFamily: "Helvetica-Light",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		opacity: 0,
		width: "100%",
		height: "100%",
	},
	wizzardCancionSaludoInicialTextAnimated: {
	},
	textFieldTextInputAnimated: {
		width: 303,
		height: 32,
	},
	textFieldTextInput: {
		backgroundColor: "rgba(50, 51, 55, 0.27)",
		paddingTop: 8,
		color: "rgb(255, 250, 250)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: "100%",
		height: "100%",
	},
	buttonButton: {
		backgroundColor: "rgba(20, 5, 222, 0.2)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 146,
		height: 44,
		marginTop: 49,
	},
	buttonButtonText: {
		color: "white",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	wizzardCancionPreguntaTituloText: {
		color: "white",
		fontFamily: "Helvetica-Light",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	wizzardCancionPreguntaTituloTextAnimated: {
		position: "absolute",
		alignSelf: "center",
		top: 0,
	},
})
