import React, { Component } from 'react';
import { Text, View, Image,Dimensions, StyleSheet,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/backgroundImage.jpg"
import square from "../assets/images/3.jpg";

export default class Test extends Component {
    constructor(){
		super();
		this.state = {
			window: Dimensions.get('window'),
			screens: [ 1, 2 ,3],
			backgroundColor: 'transparent'
		}
	}

	hideImage = ()=>{
		this.setState({
			backgroundColor:'#77777755'
		});
	}
	showImage =() =>{
		this.setState({
			backgroundColor:'transparent'
		});
	}

	render() {
		const {width,height} = this.state.window;

		const backgroundColor =  this.state.backgroundColor;

		const hideImage = this.hideImage;
		const showImage = this.showImage;

		

		return (
			<View style={{ height: '100%', width: '100%', position: 'relative', padding: 10 }}>
						<Image source={backgroundImage} style={{
							position: 'absolute', left: 0,
							top: 0,
							width: width,
							height: height
						}}
							resizeMode='cover'
							blurRadius={3}
						/>
						<View style={{ flex: 3 }}>
							<ScrollView style={{ paddingTop: 25 }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.dialogDescription}>
										Continuemos, ahora debes elegir el nuevo género musical, puedes seleccionar hasta dos opciones.									
									</Text>

								</View>
								<View style={{ flex: 1, overflow: 'hidden', alignItems: 'center' }}>
									<Image source={square} style={{ width: width - 140, height: width - 140 }} resizeMode='contain' />
								</View>
							</ScrollView>
						</View>
						<View style={{ ...styles.dialogActions, backgroundColor: backgroundColor }}>
							<ScrollView>
								<View
									style={styles.copyView}>
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
											source={require("../assets/images/group-copy-9.png")}
											style={styles.groupCopy9Image} />
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
										<Image
											source={require("../assets/images/bitmap-5.png")}
											style={styles.bitmapImage} />
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
										<Image
											source={require("../assets/images/rectangle-2.png")}
											style={styles.rectangle2Image} />
									</View>
									<Text
										style={styles.popText}>POP</Text>
								</View>
								<View
									style={styles.copyTwoView}>
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
											source={require("../assets/images/bitmap-4.png")}
											style={styles.bitmapTwoImage} />
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
										<Image
											source={require("../assets/images/rectangle-2.png")}
											style={styles.rectangle2CopyImage} />
									</View>
									<Text
										style={styles.rockText}>ROCK</Text>
								</View>
								<View
									style={{
										flex: 1,
									}} />
								<View
									style={styles.copyThreeView}>
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
											source={require("../assets/images/bitmap.png")}
											style={styles.bitmapThreeImage} />
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
										<Image
											source={require("../assets/images/rectangle-2.png")}
											style={styles.rectangle2CopyTwoImage} />
									</View>
									<Text
										style={styles.bluesText}>BLUES</Text>
								</View>
								<View
									style={styles.copyFourView}>
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
											source={require("../assets/images/bitmap-2.png")}
											style={styles.bitmapFourImage} />
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
										<Image
											source={require("../assets/images/rectangle-2.png")}
											style={styles.rectangle2CopyThreeImage} />
									</View>
									<Text
										style={styles.jazzText}>JAZZ</Text>
								</View>
							</ScrollView>

						</View>

					</View>
				);

	}
}

const styles = StyleSheet.create({
	textButton:{
		color: 'white', 
		fontSize: 14,
		letterSpacing: 4.67,
		textTransform:'uppercase'
	},
	dialogDescription:{ 
		color: 'white', 
		borderLeftColor: 'white', 
		borderLeftWidth: 1, 
		paddingHorizontal: 10, 
		fontSize: 18, 
		paddingVertical: 20,
		fontFamily: "Segoeui",

	},
	dialogActions: { 
		flex: 1, 
		justifyContent: 'space-around', 
		minHeight: 88, 
		maxHeight: 120, 
		alignItems: 'flex-end', 
		borderRightColor: 'white', 
		borderRightWidth: 1,
		paddingRight: 10,
		paddingVertical:20
	},
	xView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangle5Copy2Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 736,
	},
	lineasCostadosCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 2,
		height: 172,
	},
	continuemosAhoraDText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "SegoeUI-Light",
		fontSize: 18.33,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "stretch",
	},
	deslizaLaListaYEText: {
		color: "white",
		fontFamily: "SegoeUI-Semilight",
		fontSize: 14.33,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 22,
	},
	seleccionImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 67,
		marginRight: 26,
		marginTop: 54,
	},
	lineasCostadosCopy3Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 4,
		height: 467,
	},
	copyView: {
		backgroundColor: "transparent",
		width: 330,
		height: 100,
	},
	groupCopy9Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 110,
	},
	bitmapImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 110,
	},
	rectangle2Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 110,
	},
	popText: {
		color: "white",
		fontFamily: "Segoeuisl",
		fontSize: 15.67,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 14,
		top: 39,
	},
	copyTwoView: {
		backgroundColor: "transparent",
		width: 330,
		height: 110,
		marginTop: 19,
	},
	bitmapTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 110,
	},
	rectangle2CopyImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 110,
	},
	rockText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "SegoeUI-Semilight",
		fontSize: 15.67,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 14,
		top: 39,
	},
	copyThreeView: {
		backgroundColor: "transparent",
		width: 330,
		height: 110,
		marginBottom: 20,
	},
	bitmapThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 110,
	},
	rectangle2CopyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 110,
	},
	bluesText: {
		color: "white",
		fontFamily: "SegoeUI-Semilight",
		fontSize: 15.67,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 14,
		top: 39,
	},
	copyFourView: {
		backgroundColor: "transparent",
		width: 330,
		height: 110,
	},
	bitmapFourImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 110,
	},
	rectangle2CopyThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		height: 110,
	},
	jazzText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "SegoeUI-Semilight",
		fontSize: 15.67,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 14,
		top: 39,
	},
});
