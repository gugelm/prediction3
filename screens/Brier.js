import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { store } from '../redux/store'
import { useSelector } from 'react-redux'
import HomeScreen from './HomeScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

let brierScore = 0

function precise(x) {
  return Number.parseFloat(x).toPrecision(2);
}

function brier(predictionData) {
      console.log(predictionData)
      //return brierScore = "0.22"
      
// .81 + .64 = 1.45       
        return brierScore = predictionData.reduce(function (acc, obj) { return (acc + obj.prob)+1 }, 0)
  }
/*        for(var i=0; i< predictionData.length; i++) {
        return brierScore = brierScore+predictionData[i].prob
        }*/


export default function Brier({ route, navigation }) {
const predictionData = useSelector(state => state.prediction)
brierScore = 0
brier(predictionData)
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 72, fontWeight: 'bold'}}>{precise(brierScore)}</Text>
      </View>
    
          <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <Button 
        title=' Predictions'
        icon={
            <Icon
              name="arrow-circle-right"
              size={18}
              color='rgb(32, 137, 220)'
            />
          }
        type='clear'
        buttonStyle={{width:150, padding: 10}} 
        containerStyle={{padding:10}}
        onPress={() => {
                navigation.navigate('Predictions')
            }
          }
       />
       <Button 
        title=' Brier Score'
        icon={
            <Icon
              name="check-circle"
              size={18}
              color='rgb(32, 137, 220)'
            />
          }
        type='clear'
        buttonStyle={{width:150, padding: 10}} 
        containerStyle={{padding:10}}
        onPress={() => {
                navigation.navigate('Brier')
            }
          }
       />
      </View>
      </View>
  );
}
