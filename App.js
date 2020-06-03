import * as React from 'react';
import { View, FlatList, Text, TextInput, Button, Alert } from 'react-native';
import {ListItem, Input, FormLabel, FormInput, FormValidationMessage } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import store from './redux/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import PredictionDetails from './screens/PredictionDetails'
import Add from './screens/Add'
import Login from './screens/Login'
import { addPrediction } from './redux/actions'


// import { PersistGate } from 'redux-persist/integration/react'

const Stack = createStackNavigator();

export function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;



