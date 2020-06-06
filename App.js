import * as React from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import {ListItem, Input, FormLabel, FormInput, FormValidationMessage, Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { store, persistor } from './redux/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import PredictionDetails from './screens/PredictionDetails'
import Add from './screens/Add'
import Login from './screens/Login'
import Brier from './screens/Brier'
import BrierDef from './screens/BrierDef'
import { addPrediction } from './redux/actions'
import { PersistGate } from 'redux-persist/integration/react'

// DISABLE THIS WHEN YOU WANT PRESISTOR TO WORK
// persistor.purge()

const Stack = createStackNavigator();

export function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Predictions">
          <Stack.Screen 
            name="Login" 
            component={Login} 
          />
          <Stack.Screen 
            name="Predictions" 
            component={HomeScreen}
            options={({ navigation, route }) => ({
                headerRight: () => (
                <Button
                  type='clear'
                  title='Add Prediction'
                  onPress={() => navigation.navigate('Add')}
                />
              )})}
          />
          <Stack.Screen 
            name="Prediction Details" 
            component={PredictionDetails}
          />
          <Stack.Screen 
            name="Add" 
            component={Add} 
          />
          <Stack.Screen 
            name="Brier" 
            component={Brier} 
          />
          <Stack.Screen 
            name="Brier Score" 
            component={BrierDef} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
    </Provider>
  )
}

export default App;