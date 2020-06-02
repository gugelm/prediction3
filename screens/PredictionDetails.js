import * as React from 'react';
import { View, Button } from 'react-native';
import { Input } from "react-native-elements";
import store from '../redux/store'
import { useDispatch } from 'react-redux'
import { deletePrediction } from '../redux/actions'

export default function PredictionDetails({ route, navigation }) {
  
  const {key} = route.params
  const {prediction} = route.params
  const {deadline} = route.params
  const {prob} = route.params
  const {reasoning} = route.params

  

  const dispatch = useDispatch()
  const [ predictionEdit, onChangePredVal ] = React.useState({prediction});
  const [ deadline_value, onChangeDeadVal ] = React.useState('');
  const [ probability_value, onChangeProbVal ] = React.useState('');
  const [ reasoning_value, onChangeReasoningVal ] = React.useState('');
  const now = Date.now()

console.log({prediction})
console.log({predictionEdit})

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        label='Prediction'
        value= { predictionEdit }
        placeholder='Enter a quantifiable prediction.'
        onChangeText={text => onChangePredVal(text)}
      />
      <Input
        label= 'Deadline'
        value={deadline} 
        placeholder='Enter a deadline'
        onChangeText={text => onChangeDeadValEdit(text)}
      />
      <Input
        label= 'Probability'
        value={prob} 
        placeholder='Enter a deadline'
        onChangeText={text => onChangeDeadValEdit(text)}
      />
      <Input
        label= 'Reasoning'
        value={reasoning} 
        placeholder='Enter a deadline'
        onChangeText={text => onChangeDeadValEdit(text)}
      />
      <View style={{ flexDirection: 'row'}}>
      <Button 
        title='Done'
        style={{padding: 10}} 
        onPress={() => {
            navigation.navigate('Predictions')
            updatePrediction(prediction[0])
            }
          }
       />
      <Button 
        title='Delete'
        style={{padding: 10}} 
        onPress={() => {
                dispatch(deletePrediction())
                navigation.navigate('Predictions')
            }
          }
       />
      </View>
    </View>
  );
}