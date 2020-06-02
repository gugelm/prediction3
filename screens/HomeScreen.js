import * as React from 'react';
import { View, FlatList } from 'react-native';
import {ListItem } from "react-native-elements";
import { useSelector, connect } from 'react-redux'
import store from '../redux/store'

let prediction = []
const predictionData = [
  {
  "prediction":"Instagram has peaked.",
  "created_date":"5/1/2019",
  "prob":"90%",
  "deadline":"5/1/2022",
  "reasoning": "My friends have stopped using it. People are tired of sees doggos and vacation and perfectly curated shots. Young kids are purposefully making their pics look like shit to be more authentic.",
  "happened": "Pending"
  }, 
  {
  "prediction":"Trump will win the 2020 election.",
  "created_date":"10/8/2019",
  "prob":"80%",
  "deadline":"11/3/2020",
  "reasoning": "From a trump’s supporters perspective, he’s done a good job. The economy is strong, he’s avoid conflict (e.g. Iran). Dems sense weakness i  their candidates and are pushing impeachment 1 year from the election. Kelly says 50% on 11/15/2019z",
  "happened": "Yes"
  }]

export default function HomeScreen({ navigation }) {
  const predictionData = useSelector(state => state.prediction)
  return ( 
    <View>
    <FlatList 
    data={predictionData}
    renderItem={({ item }) => (
    <ListItem
      key={item.prediction}
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