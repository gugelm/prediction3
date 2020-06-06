import * as React from 'react';
import { View, Button } from 'react-native';
import HomeScreen from './HomeScreen'

export default function Login({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Login' onPress={() => navigation.navigate('Predictions')} />
    </View>
  );
}
