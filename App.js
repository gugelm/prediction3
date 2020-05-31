import * as React from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import {ListItem, Input, Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/FontAwesome'
import {store, persistor} from './redux/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


let predictionData = [
  {
  "key":"1",
  "prediction":"Instagram has peaked.",
  "created_date":"5/1/2019",
  "prob":"90%",
  "deadline":"5/1/2022",
  "reasoning": "My friends have stopped using it. People are tired of sees doggos and vacation and perfectly curated shots. Young kids are purposefully making their pics look like shit to be more authentic."
  }, 
  {
  "key":"2",
  "prediction":"Trump will win the 2020 election.",
  "created_date":"10/8/2019",
  "prob":"80%",
  "deadline":"11/3/2020",
  "reasoning": "From a trump’s supporters perspective, he’s done a good job. The economy is strong, he’s avoid conflict (e.g. Iran). Dems sense weakness i  their candidates and are pushing impeachment 1 year from the election. Kelly says 50% on 11/15/2019z"
  }]
let predictionList = predictionData

let searchFilterFunction = (value) => {}

function HomeScreen({ navigation }) {
  let [ predictionData, searchFilterFunction] = React.useState(predictionList);
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
          'DetailsScreen', 
          {key: [item.key], prediction: [item.prediction], deadline: [item.deadline]})
        }
      />
    )} 
    />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
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

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Predictions" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;