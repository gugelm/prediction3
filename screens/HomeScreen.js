import * as React from 'react';
import { View, FlatList } from 'react-native';
import {ListItem } from "react-native-elements";
import { connect } from 'react-redux'
import store from '../redux/store'

const predictionData = store.getState()

let prediction = []

function HomeScreen({ navigation }) {
  return ( 
    <View>
    <FlatList 
    data={predictionData.prediction}
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

const mapStateToProps =  state => ({
  prediction: state.prediction,
})

// argument 1 = part of the state you wanna subscribe to and pass, argument 2 = your new function / class
export default connect(mapStateToProps)(HomeScreen);