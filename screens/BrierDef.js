import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'
import Brier from './Brier'

export default function BrierDef({ route, navigation }) {
	return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20 }}>
		<Text style={{fontSize: 18, fontWeight: 'bold', paddingBottom: 15}}>What is a Brier Score?</Text>
		<Text>A Brier score measures the accuracy of your predictions.</Text>
		<Text>{"\n"}</Text>
		<Text><Text style={{fontWeight:'bold', color:'green'}}>0.0</Text> = 100% accraute</Text>
		<Text><Text style={{fontWeight:'bold', color:'orange'}}>0.5</Text> = 50% accurate</Text>
		<Text><Text style={{fontWeight:'bold', color:'red'}}>2.0</Text> = 0% accurate</Text>
		<Text>{"\n"}</Text>
		<Text style={{fontSize: 18, fontWeight: 'bold', paddingBottom: 15}}>What's a good Brier Score?</Text>
		<Text>Whether a Brier score is good or bad depends on the types of predictions you're trying to make.</Text>
		<Text>{"\n"}</Text>
		<Text>If you have a Brier score of 0.5 and you're predicting the weather in Phoenix, AZ, you suck. You can get a much higher score by just saying "sunny" everyday.</Text>
		<Text>{"\n"}</Text>
		<Text>If you have a Brier score of 0.5 and you're predicting lottery numbers, you are a god.</Text>
	</View>
	)
}