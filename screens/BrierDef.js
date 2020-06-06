import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'
import Brier from './Brier'

export default function BrierDef({ route, navigation }) {
	return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 20 }}>
		<Text style={{fontSize: 36, fontWeight: 'bold', paddingBottom: 15}}>What is a Brier Score?</Text>
		<Text>A Brier score measures the accuracy of your predictions.</Text>
		<Text>{"\n"}</Text>
		<Text>0.0 = 100% accraute</Text>
		<Text>0.5 = 50% accurate</Text>
		<Text>2.0 = 0% accurate</Text>
		<Text>{"\n"}</Text>
		<Text>Whether a Brier score is good or bad depends on the types of predictions you're trying to make.</Text>
		<Text>{"\n"}</Text>
		<Text>If you have a Brier score of 0.5 and you're predicting the weather in Phoenix, AZ, you suck. You just have say "sunny" to do much better than that.</Text>
		<Text>{"\n"}</Text>
		<Text>If you have a Brier score of 0.5 and you're predicting lottery numbers, you are an oracle.</Text>
	</View>
	)
}