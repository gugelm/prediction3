import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Overlay } from 'react-native-elements'
import { store } from '../redux/store'
import { useSelector } from 'react-redux'
import HomeScreen from './HomeScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import BrierDef from './BrierDef'

let brierScore = 0

function precise(x) {
  return Number.parseFloat(x).toPrecision(2);
}

// Happened: 
// 0 = Waiting, 1 = Happened, 2 = Didn't Happen

/*function brier(predictionData) {
	return brierScore = predictionData.reduce(function (previousValue, currentObject) { 
		return (previousValue += Math.pow(currentObject.prob,2) + Math.pow(-currentObject.prob,2))}, 0)
}*/


// predictionData.happened is not being pulled correctly...
function brier(predictionData) {
	
return brierScore = predictionData.filter(x => x.happened > 0)
	.reduce(function (previousValue, currentObject) { 
	if (currentObject.happened == 1) {
		return (previousValue += Math.pow((1-currentObject.prob),2) + Math.pow(1-currentObject.prob,2))
	}

	if (currentObject.happened == 2) {
		return (previousValue += Math.pow(currentObject.prob,2) + Math.pow(-currentObject.prob,2))
	}
	else {
		return previousValue
	}
	}, 0)
}

export default function Brier({ route, navigation }) {
const predictionData = useSelector(state => state.prediction)
const [visible, setVisible] = useState(false)

const toggleOverlay = () => {
	setVisible(!visible);
};

brierScore = 0

// Calculate the Brier Score
brier(predictionData)

// Count # of Predictions that Happened or Didn't Happened 
let happenedCount = predictionData.reduce(function(previousValue, currentObject) {
	return previousValue + (currentObject.happened ? 1 || 2: 0) }, 0)

// Get the average Brier Score
brierScore = brierScore / happenedCount

  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	    <Text style={{fontSize: 72, fontWeight: 'bold'}}>{precise(brierScore)}</Text>
			<Button 
			type="clear" 
			title="What is a Brier Score?" 
			onPress={() => {
	                navigation.navigate('Brier Score')
	            }
	          }
			/>
	</View>
    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', position: 'absolute', left: 0, right: 0, bottom: 0}}>
	      <Button 
	        title=' Predictions'
	        titleStyle={{color:'gray'}}
	        icon={
	            <Icon
	              name="arrow-circle-right"
	              size={18}
	              color='gray'
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
	        titleStyle={{fontWeight: 'bold'}}
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