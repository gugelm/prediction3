import * as React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, ScrollView, Platform } from 'react-native';
import { Input, ButtonGroup, Button } from "react-native-elements";
import { store } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { deletePrediction, updatePrediction, updatePrediction2 } from '../redux/actions'
import RNPickerSelect from 'react-native-picker-select'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'

export default function PredictionDetails({ route, navigation }) {
  
  const {key} = route.params
  const {prediction} = route.params
  const {deadlineMon} = route.params
  const {deadlineYear} = route.params
  const {prob} = route.params
  const {reasoning} = route.params
  const {happened} = route.params

  const dispatch = useDispatch()
  const [ predictionEdit, onChangePredVal ] = React.useState(prediction);
  const [ deadlineMonEdit, onChangeDeadMonVal ] = React.useState(deadlineMon);
  const [ deadlineYearEdit, onChangeDeadYearVal ] = React.useState(deadlineYear);
  const [ probabilityEdit, onChangeProbVal ] = React.useState(prob);
  const [ reasoningEdit, onChangeReasoningVal ] = React.useState(reasoning);
  const [ happenedEdit, onChangeHappenedVal ] = React.useState(happened);
  const now = Date.now()

  const happenedButtons = ['Waiting', 'Happened', 'Didn\'t Happen']
  const happenedStatus = useSelector(state => state.prediction.happened)

  return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : 25}
      style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 25 }}
    >
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10, marginTop:10}}>
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
        onChangeText={
            predictionEdit => {
              onChangePredVal(predictionEdit)
              dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
        value={predictionEdit} 
      />
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10}}>
        Deadline
      </Text>
      <View style={{flexDirection: 'row'}}>
      <RNPickerSelect
            value={deadlineMonEdit}
            onValueChange={
              deadlineMonEdit => {
              onChangeDeadYearVal(deadlineMonEdit)
              dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, Number(probabilityEdit), reasoningEdit, now, key, happenedEdit))
            }}
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
            value={deadlineYearEdit}
            onValueChange={
              deadlineYearEdit => {
              onChangeDeadYearVal(deadlineYearEdit)
              dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, Number(probabilityEdit), reasoningEdit, now, key, happenedEdit))
            }}
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
     {/* <Input
        inputContainerStyle={{marginBottom: 5}}
        label= 'Deadline'
        value={deadlineEdit} 
        placeholder='Enter a deadline.'
        onChangeText={
          deadlineEdit => {
          onChangeDeadVal(deadlineEdit)
          dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
      />*/}
      <Text 
        style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 10}}>
        Probability
      </Text>
      <RNPickerSelect
            onValueChange={
              probabilityEdit => {
              onChangeProbVal(Number(probabilityEdit))
              dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, Number(probabilityEdit), reasoningEdit, now, key, happenedEdit))
            }}
            value={probabilityEdit} 
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
        onChangeText={
            reasoningEdit => {
            onChangeReasoningVal(reasoningEdit)
            dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
        value={reasoningEdit} 
      />
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10, marginTop: 15}}>Did it happen?</Text>
      <ButtonGroup
        buttons={happenedButtons}
        selectedIndex={happenedEdit}
        onPress={
            happenedEdit => {
            onChangeHappenedVal(happenedEdit)
            dispatch(updatePrediction(predictionEdit, deadlineMonEdit, deadlineYearEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
        containerStyle={{alignSelf: 'flex-start', width: 400, marginBottom: 15}}
      />
      <Button 
        type='clear'
        title='Delete this prediction'
        titleStyle={{color:'red'}}
        buttonStyle={{width:200, padding: 10, borderColor:'red', justifyContent: 'flex-start', marginTop: 15}} 
        containerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 10,
        }}
        onPress={() => {
                dispatch(deletePrediction(predictionEdit))
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
    marginBottom: 15,
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
    marginBottom: 15,
    backgroundColor: 'white',
  },
});