import * as React from 'react';
import { View, Button } from 'react-native';
import { Input } from "react-native-elements";
import store from '../redux/store'
import { useDispatch } from 'react-redux'
import { deletePrediction, updatePrediction } from '../redux/actions'

export default function PredictionDetails({ route, navigation }) {
  
  const {key} = route.params
  const {prediction} = route.params
  const {deadline} = route.params
  const {prob} = route.params
  const {reasoning} = route.params

  const dispatch = useDispatch()
  const [ predictionEdit, onChangePredVal ] = React.useState(prediction);
  const [ deadlineEdit, onChangeDeadVal ] = React.useState(deadline);
  const [ probabilityEdit, onChangeProbVal ] = React.useState(prob);
  const [ reasoningEdit, onChangeReasoningVal ] = React.useState(reasoning);
  const now = Date.now()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        label='Prediction'
        value= {predictionEdit}
        placeholder='Enter a quantifiable prediction.'
        onChangeText={text => onChangePredVal(text)}
      />
      <Input
        label= 'Deadline'
        value={deadlineEdit} 
        placeholder='Enter a deadline'
        onChangeText={text => onChangeDeadVal(text)}
      />
      <Input
        label= 'Probability'
        value={probabilityEdit} 
        placeholder='Enter a deadline'
        onChangeText={text => onChangeProbVal(text)}
      />
      <Input
        label= 'Reasoning'
        value={reasoningEdit} 
        placeholder='Enter a deadline'
        onChangeText={text => onChangeReasoningVal(text)}
      />
      <View style={{ flexDirection: 'row'}}>
      <Button 
        title='Done'
        style={{padding: 10}} 
          onPress={() => {
                dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key))
                navigation.navigate('Predictions')
            }
          }
       />
      <Button 
        title='Delete'
        style={{padding: 10}} 
        onPress={() => {
                dispatch(deletePrediction(predictionEdit))
                navigation.navigate('Predictions')
            }
          }
       />
      </View>
    </View>
  );
}