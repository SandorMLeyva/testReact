//
//  Artboard
//  android
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Animated, Easing, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import Form from 'react-native-jsonschema-form'



  const MyCustomWidget = (props) => {
	return (

		<TextInput style={{
			height: 40,
			margin: 20,
			padding: 10,
			borderColor: 'gray',
			borderWidth: 1
		}}
			keyboardType='numeric'
			placeholder='Age'
			onChangeText={(event) => props.onChange(event)}
		   >
		</TextInput>

	);
  };
  
  const widgets = {
	estyEscapao: MyCustomWidget
  };


const workSchema = {
	schema: {
		// title: "A registration form",
		// description: "A simple form example.",
		type: "object",
		required: ["firstName", "lastName"],
		properties: {
			firstName: {
				type: "string",
				title: "First name",
				default: "Chuck",
			},
			lastName: {
				type: "string",
				title: "Last name",
			},
			age: {
				type: "integer",
				title: "Age",
			},
			bio: {
				type: "string",
				title: "Bio",
			},
			password: {
				type: "string",
				title: "Password",
				minLength: 3,
			},
			telephone: {
				type: "string",
				title: "Telephone",
				minLength: 10,
			},
		},
	},
	uiSchema: {
		// firstName: {
		// 	"ui:autofocus": true,
		// 	"ui:emptyValue": "",
		// },
		age: {
			"ui:widget": "estyEscapao",
			"ui:title": "Age of person",
			"ui:description": "(earthian year)",
		},
		// bio: {
		// 	"ui:widget": "textarea",
		// },
		// password: {
		// 	"ui:widget": "password",
		// 	"ui:help": "Hint: Make it strong!",
		// },
		// date: {
		// 	"ui:widget": "alt-datetime",
		// },
		// telephone: {
		// 	"ui:options": {
		// 		inputType: "tel",
		// 	},
		// },
	}
};


export default class Artboard extends React.Component {

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
			cad4e750198955c40d29e2eed6ImageTranslateX: new Animated.Value(0.01),
		}
	}

	componentDidMount() {

	}

	startAnimationOne() {

		// Set animation initial values to all animated properties
		this.state.cad4e750198955c40d29e2eed6ImageTranslateX.setValue(0)

		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.cad4e750198955c40d29e2eed6ImageTranslateX, {
			duration: 2200,
			easing: Easing.bezier(0, 0, 0.58, 1),
			toValue: 40,
		})])]).start()
	}

	render() {

		return <View
			style={styles.artboardView}>
			
			<View>
				<View style={styles.notch}></View>
				<Form
					schema={workSchema.schema}
					onSubmit={(submited) => {
						console.log(JSON.stringify(submited.formData))
					}}
					uiSchema={{ ...workSchema.uiSchema }}
					submitTitle={"Su"}
					noValidate={false}
					liveValidate={true}
					showErrorList={false}
					widgets = {widgets}
				/>
			</View>
			
		</View >
	}
}

const styles = StyleSheet.create({
	artboardView: {
		backgroundColor: "white",
		flex: 1,
	},
	cad4e750198955c40d29e2eed6Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	cad4e750198955c40d29e2eed6ImageAnimated: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1445,
	},
	orosItsHereText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "OpenSans-Bold",
		fontSize: 64,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		position: "absolute",
		left: 44,
		top: 467,
	},
})
