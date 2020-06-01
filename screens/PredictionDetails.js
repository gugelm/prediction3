import * as React from 'react';
import { View, Button } from 'react-native';
import { Input } from "react-native-elements";
import store from '../redux/store'
import { connect } from 'react-redux'
import { deletePrediction } from '../redux/actions'

function PredictionDetails({ route, navigation }) {
  const {key} = route.params
  const {prediction} = route.params
  const {deadline} = route.params
  
// i'm not using the actual state name...
// and why the hell do i have to use prediction[0]
  const [ prediction_value_edit, onChangePredValEdit ] = React.useState('');
  const [ deadline_value_edit, onChangeDeadValEdit ] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        label='Prediction'
        value={prediction[0]}
        placeholder='Enter a quantifiable prediction.'
        onChangeText={text => onChangePredValEdit(text)}
      />
      <Input
        label= 'Deadline'
        value={deadline[0]} 
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
            navigation.navigate('Predictions')
            deletePrediction(key[0])
            }
          }
       />
      </View>
    </View>
  );
}

const mapStateToProps2 =  state => ({
  prediction: state.prediction,
})

export default connect(mapStateToProps2)(PredictionDetails)