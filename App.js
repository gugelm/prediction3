import * as React from 'react';
import { View, FlatList, Text, TextInput, Button, Alert } from 'react-native';
import {ListItem, Input, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const predictionData = store.getState()
let searchFilterFunction = (value) => {}

let addPrediction = (prediction_value) =>
  store.dispatch({
    type: 'ADD_PREDICTION',
    payload: {
      key: 'z',
      prediction: 'ok' + {prediction_value},
      created_date: '3',
      prob: '4', 
      deadline: '5',
      reasoning: '6',
    }
  })

let updatePrediction = (newPred) =>
  store.dispatch({
    type: 'UPDATE_PREDICTION',
    payload: {
      key: 'z',
      prediction: 'ok' + {newPred},
      created_date: '3',
      prob: '4', 
      deadline: '5',
      reasoning: '6',
    }
  })

function HomeScreen({ navigation }) {
  return ( 
    <View>
    <FlatList 
    data={predictionData}
    renderItem={({ item }) => (
    <ListItem
      key={item.key}
      title={item.prediction}
      bottomDivider
      chevron
      onPress={() =>
        navigation.navigate(
          'Prediction Details', 
          {key: [item.key], prediction: [item.prediction], deadline: [item.deadline]})
        }
      />
    )} 
    />
    </View>
  );
}

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
      </View>
    </View>
  );
}

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
          onPress={(prediction_value) => {
            navigation.navigate('Predictions')
            addPrediction(prediction_value)
            }
          }
        />
      </View>
    </View>
  );
}

function Login({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Login' onPress={() => navigation.navigate('Predictions')} />
    </View>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Predictions">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen 
          name="Predictions" 
          component={HomeScreen}
          options={({ navigation, route }) => ({
              headerRight: () => (
              <Button
                title='Add Prediction'
                onPress={() => navigation.navigate('Add')}
              />
            )})}
        />
        <Stack.Screen name="Prediction Details" component={PredictionDetails} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

