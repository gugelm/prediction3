import * as React from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import {ListItem, Input, Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const predictionData = store.getState()
let searchFilterFunction = (value) => {}

let addPrediction = () =>
  store.dispatch({
    type: 'ADD_PREDICTION',
    payload: {
      key: 1,
      prediction: 2,
      created_date: 3,
      prob: 4, 
      deadline: 5,
      reasoning: 6,
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
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        label='Prediction'
        value={prediction[0]}
        placeholder='Enter a quantifiable prediction.'
        onChangeText={value => searchFilterFunction(value)}
      />
      <Input
        label= 'Deadline'
        value={deadline[0]} 
        placeholder='Enter a deadline'
      />
      <View style={{ flexDirection: 'row'}}>
      <Button 
        title='Done'
        style={{padding: 10}} 
       />
      </View>
    </View>
  );
}

function Add({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        label='Prediction'
        value=''
        placeholder='Enter a quantifiable prediction.'
      />
      <Input
        label= 'Deadline'
        placeholder='12/31/2020'
        value=''
      />
      <Input
        label= 'Probability'
        placeholder='50%'
        value=''
      />
      <Input
        label= 'Reasoning'
        placeholder='Why?'
        value=''
      />
      <View style={{ flexDirection: 'row'}}>
      <Button 
        title='Add'
        style={{padding: 10}}
        onPress={
          addPrediction()
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

