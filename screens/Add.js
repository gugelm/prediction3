import React, { Component, useState } from 'react'
import { View, KeyboardAvoidingView, Text, StyleSheet, TextInput, ScrollView, Platform } from 'react-native';
import { Input, Button } from "react-native-elements";
import { store } from '../redux/store'
import { useDispatch } from 'react-redux'
import HomeScreen from './HomeScreen'
import { addPrediction } from '../redux/actions'
import RNPickerSelect from 'react-native-picker-select'
import DatePicker from 'react-native-modern-datepicker'

export default function Add({ route, navigation }) {
  const dispatch = useDispatch()
  const [ prediction_value, onChangePredVal ] = React.useState('');
  const [ deadlineMon_value, onChangeDeadMonVal ] = React.useState('');
  const [ deadlineYear_value, onChangeDeadYearVal ] = React.useState('');
  const [ probability_value, onChangeProbVal ] = React.useState('');
  const [ reasoning_value, onChangeReasoningVal ] = React.useState('');
  const now = Date.now()
  
// https://github.com/react-native-community/datetimepicker


  return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop:25 }}
    >
      <Text 
        style={{
          fontSize: 16, 
          fontWeight: 'bold', 
          color: 'rgb(134, 147, 158)', 
          alignSelf: 'flex-start', 
          marginLeft: 10, 
          marginBottom: 10, 
          marginTop:10,
        }}>
        Prediction
      </Text>
      <TextInput
        style={{ 
          alignSelf: 'stretch',    
          flexDirection: 'row',
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 8, 
          backgroundColor: 'white', 
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 15, 
        }}
        placeholder='Enter a quantifiable prediction.'
        multiline
        numberOfLines={2}
        onChangeText={text => onChangePredVal(text)}
        value={prediction_value}
      />
{/*      <Input
        label= 'Deadline'
        placeholder='12/31/2020'
        onChangeText={text => onChangeDeadVal(text)}
        value={deadline_value}
      />*/}
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10}}>
        Deadline
      </Text>
      <View style={{flexDirection: 'row'}}>
      <RNPickerSelect
            onValueChange={text => onChangeDeadMonVal(text)}
            items={[
                { label: 'Jan', value: 'Jan' },
                { label: 'Feb', value: 'Feb' },
                { label: 'Mar', value: 'Mar' },
                { label: 'Apr', value: 'Apr' },
                { label: 'May', value: 'May' },
                { label: 'Jun', value: 'Jun' },
                { label: 'Jul', value: 'Jul' },
                { label: 'Aug', value: 'Aug' },
                { label: 'Sep', value: 'Sep' },
                { label: 'Oct', value: 'Oct' },
                { label: 'Nov', value: 'Nov' },
                { label: 'Dec', value: 'Dec' },
            ]}
            style={pickerSelectStyles}
        />
        <RNPickerSelect
            onValueChange={text => onChangeDeadYearVal(text)}
            items={[
                { label: '2019', value: '2019' },
                { label: '2020', value: '2020' },
                { label: '2021', value: '2021' },
                { label: '2022', value: '2022' },
                { label: '2023', value: '2023' },
                { label: '2024', value: '2024' },
                { label: '2025', value: '2025' },
                { label: '2026', value: '2026' },
                { label: '2027', value: '2027' },
                { label: '2028', value: '2028' },
                { label: '2029', value: '2029' },
                { label: '2030', value: '2030' },
            ]}
            style={pickerSelectStyles}
        />
        </View>
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10, marginTop: 15}}>
        Probability
      </Text>
      <RNPickerSelect
            onValueChange={text => onChangeProbVal(text)}
            items={[
                { label: '10%', value: .1 },
                { label: '20%', value: .2 },
                { label: '30%', value: .3 },
                { label: '40%', value: .4 },
                { label: '50%', value: .5 },
                { label: '60%', value: .6 },
                { label: '70%', value: .7 },
                { label: '80%', value: .8 },
                { label: '90%', value: .9 },
                { label: '100%', value: 1 },
            ]}
            style={pickerSelectStyles}
        />
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10, marginTop:10}}>
        Reasoning
      </Text>
      <TextInput
        style={{ 
          alignSelf: 'stretch',    
          flexDirection: 'row',
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 8, 
          backgroundColor: 'white', 
          marginLeft: 10,
          marginRight: 10,
        }}
        placeholder='Why do you think your prediction will happen?'
        multiline
        numberOfLines={2}
        onChangeText={text => onChangeReasoningVal(text)}
        value={reasoning_value}
      />
        <Button
        containerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 10,
        }}
          buttonStyle={{width: 200, height: 55}}
          title="Add Prediction"
          onPress={() => {
                dispatch(addPrediction(prediction_value, deadlineMon_value, deadlineYear_value, Number(probability_value), reasoning_value, now))
                navigation.navigate('Predictions')
            }
          }
        />
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
});