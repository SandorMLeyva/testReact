//
//  Artboard22
//  Nuevo Test
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'


export default class Artboard22 extends React.Component {

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
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.artboard22View}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Image
						source={require("./../../assets/images/646fb027396041560508c62ae44-2.png")}
						style={styles.fb027396041560508c62ae44Image}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.alertView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/646fb027396041560508c62ae44.png")}
								style={styles.fb027396041560508c62ae44TwoImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 59,
								width: 240,
								top: 296,
								height: 153,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.titleText}>Rate AppName</Text>
							<Text
								style={styles.descriptionText}>If you enjoy using AppName, would you mind taking a moment to rate it? Thanks for your support!</Text>
							<Text
								style={styles.rateAppnameText}>Rate AppName</Text>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	artboard22View: {
		backgroundColor: "white",
		flex: 1,
	},
	fb027396041560508c62ae44Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 667,
	},
	alertView: {
		backgroundColor: "transparent",
		height: 669,
	},
	fb027396041560508c62ae44TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 669,
	},
	titleText: {
		color: "white",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 65,
	},
	descriptionText: {
		color: "white",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 16,
		backgroundColor: "transparent",
		width: 240,
		marginTop: 33,
	},
	rateAppnameText: {
		color: "rgb(233, 237, 241)",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 65,
		marginTop: 32,
	},
})
