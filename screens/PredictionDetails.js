import * as React from 'react';
import { View, Text } from 'react-native';
import { Input, ButtonGroup, Button } from "react-native-elements";
import store from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { deletePrediction, updatePrediction } from '../redux/actions'

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

  console.log(happenedEdit)

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
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(134, 147, 158)', alignSelf: 'flex-start', marginLeft: 10}}>Did it happen?</Text>
      <ButtonGroup
        buttons={happenedButtons}
        selectedIndex={happenedEdit}
        onPress={text => onChangeHappenedVal(text)}
        containerStyle={{alignSelf: 'flex-start', width: 400}}
      />
      <View style={{ flexDirection: 'row'}}>
      <Button 
        title='Save'
        buttonStyle={{width:150, padding: 10}} 
        containerStyle={{padding:10}}
        onPress={() => {
                dispatch(updatePrediction(predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key, happenedEdit))
                navigation.navigate('Predictions')
            }
          }
       />
      <Button 
        type='outline'
        title='Delete'
        titleStyle={{color:'red'}}
        buttonStyle={{width:150, padding: 10, borderColor:'red'}} 
        containerStyle={{padding:10}}
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