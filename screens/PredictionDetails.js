import * as React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Input, ButtonGroup, Button } from "react-native-elements";
import { store } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { deletePrediction, updatePrediction, updatePrediction2 } from '../redux/actions'

export default function PredictionDetails({ route, navigation }) {
  
  const {key} = route.params
  const {prediction} = route.params
  const {deadline} = route.params
  const {prob} = route.params
  const {reasoning} = route.params
  const {happened} = route.params

  const dispatch = useDispatch()
  const [ predictionEdit, onChangePredVal ] = React.useState(prediction);
  const [ deadlineEdit, onChangeDeadVal ] = React.useState(deadline);
  const [ probabilityEdit, onChangeProbVal ] = React.useState(prob);
  const [ reasoningEdit, onChangeReasoningVal ] = React.useState(reasoning);
  const [ happenedEdit, onChangeHappenedVal ] = React.useState(happened);
  const now = Date.now()

  const happenedButtons = ['Waiting', 'Happened', 'Didn\'t Happen']
  const happenedStatus = useSelector(state => state.prediction.happened)

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 25 }}
    >
      <Input
        inputContainerStyle={{marginBottom: 15}}
        label='Prediction'
        value= {predictionEdit}
        placeholder='Enter a quantifiable prediction.'
        onChangeText={
            predictionEdit => {
              onChangePredVal(predictionEdit)
              dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
      />
      <Input
        inputContainerStyle={{marginBottom: 15}}
        label= 'Deadline'
        value={deadlineEdit} 
        placeholder='Enter a deadline.'
        onChangeText={
          deadlineEdit => {
          onChangeDeadVal(deadlineEdit)
          dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
      />
      <Input
        inputContainerStyle={{marginBottom: 15}}
        label= 'Probability'
        value={probabilityEdit} 
        placeholder='Enter the chances it will happen.'
        onChangeText={
          probabilityEdit => {
          onChangeProbVal(probabilityEdit)
          dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
      />
      <Input
        inputContainerStyle={{marginBottom: 15}}
        label= 'Reasoning'
        value={reasoningEdit} 
        placeholder='Give your reasoning.'
        onChangeText={
            reasoningEdit => {
            onChangeReasoningVal(reasoningEdit)
            dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
      />
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10}}>Did it happen?</Text>
      <ButtonGroup
        buttons={happenedButtons}
        selectedIndex={happenedEdit}
        onPress={
            happenedEdit => {
            onChangeHappenedVal(happenedEdit)
            dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
        }}
        containerStyle={{alignSelf: 'flex-start', width: 400, marginBottom: 15}}
      />
      <Button 
        type='clear'
        title='Delete this prediction'
        titleStyle={{color:'red'}}
        buttonStyle={{width:200, padding: 10, borderColor:'red', justifyContent: 'flex-start'}} 
        containerStyle={{alignSelf: 'flex-start'}}
        onPress={() => {
                dispatch(deletePrediction(predictionEdit))
                navigation.navigate('Predictions')
            }
          }
       />
    </KeyboardAvoidingView>
  );
}
