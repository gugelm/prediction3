import * as React from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet } from 'react-native';
import { Input, Button } from "react-native-elements";
import { store } from '../redux/store'
import { useDispatch } from 'react-redux'
import HomeScreen from './HomeScreen'
import { addPrediction } from '../redux/actions'
import RNPickerSelect from 'react-native-picker-select'

export default function Add({ route, navigation }) {
  const dispatch = useDispatch()
  const [ prediction_value, onChangePredVal ] = React.useState('');
  const [ deadline_value, onChangeDeadVal ] = React.useState('');
  const [ probability_value, onChangeProbVal ] = React.useState('');
  const [ reasoning_value, onChangeReasoningVal ] = React.useState('');
  const now = Date.now()
  
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop:25 }}
    >
      <Input
        label='Prediction'
        placeholder='Enter a quantifiable prediction.'
        onChangeText={text => onChangePredVal(text)}
        value={prediction_value}
      />
      <Input
        label= 'Deadline'
        placeholder='12/31/2020'
        onChangeText={text => onChangeDeadVal(text)}
        value={deadline_value}
      />
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10}}>
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
      <Input
        labelStyle={{marginTop:25}}
        label= 'Reasoning'
        placeholder='Why?'
        onChangeText={text => onChangeReasoningVal(text)}
        value={reasoning_value}
      />
        <Button
          containerStyle={{alignSelf: 'center', paddingTop: 25}}
          buttonStyle={{width: 200, height: 55}}
          title="Add Prediction"
          onPress={() => {
                dispatch(addPrediction(prediction_value, deadline_value, Number(probability_value), reasoning_value, now))
                navigation.navigate('Predictions')
            }
          }
        />
    </KeyboardAvoidingView>
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
  },
});