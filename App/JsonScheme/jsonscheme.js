import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert} from 'react-native';
import Form from 'react-native-jsonschema-form'
import jsonSchema from './jsonSchema'


const workSchema = {
    schema: {
      title: "A registration form",
      description: "A simple form example.",
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
      firstName: {
        "ui:autofocus": true,
        "ui:emptyValue": "",
      },
      age: {
        "ui:widget": "updown",
        "ui:title": "Age of person",
        "ui:description": "(earthian year)",
      },
      bio: {
        "ui:widget": "textarea",
      },
      password: {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!",
      },
      date: {
        "ui:widget": "alt-datetime",
      },
      telephone: {
        "ui:options": {
          inputType: "tel",
        },
      },
    },
    formData: {
      lastName: "Norris",
      age: 75,
      bio: "Roundhouse kicking asses since 1940",
      password: "noneed",
    },
  };

function transformErrors(errors) {
  let reterrors=_.filter(errors,error => {
    console.log("eror",error.property)
    // return true
    return (error.message=="is a required property")
    
    // return  (!(error && error.property === ".properties['viniButton'].type") )
  })
  return reterrors
}

export default class Jsons extends Component{
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.notch}></View>
        {/* <Form 
        schema={workSchema.schema} 
        // transformErrors={transformErrors} 
        onSubmit={(submited)=>{
          Alert.alert(
           "u just submitted",
            JSON.stringify(submited.formData)          )
        }}
        uiSchema={{...workSchema.uiSchema}}
        submitTitle={"בחר"}
        noValidate={false}
        liveValidate={true}
        showErrorList={false} 
       /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding:20
  },
  notch:{
    width:"100%" ,
     height:15
    }
});