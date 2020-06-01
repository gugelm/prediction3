import * as React from 'react';
import { View, Button } from 'react-native';
import { Input } from "react-native-elements";
import store from '../redux/store'
import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import addPrediction from '../redux/actions'

function Add({ route, navigation }) {
  const [ prediction_value, onChangePredVal ] = React.useState('');
  const [ deadline_value, onChangeDeadVal ] = React.useState('');
  const [ probability_value, onChangeProbVal ] = React.useState('');
  const [ reasoning_value, onChangeReasoningVal ] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      <Input
        label= 'Probability'
        placeholder='50%'
        onChangeText={text => onChangeProbVal(text)}
        value={probability_value}
      />
      <Input
        label= 'Reasoning'
        placeholder='Why?'
        onChangeText={text => onChangeReasoningVal(text)}
        value={reasoning_value}
      />
      <View style={{ flexDirection: 'row'}}>
        <Button
          title="Add Prediction"
          onPress={() => {
            navigation.navigate('Predictions')
            addPrediction()
            }
          }
        />
      </View>
    </View>
  );
}

const mapStateToProps3 =  state => ({
  prediction: state.prediction,
})

export default connect(mapStateToProps3)(Add)