import * as React from 'react';
import { View, Button } from 'react-native';
import store from '../redux/store'
import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'

function Login({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Login' onPress={() => navigation.navigate('Predictions')} />
    </View>
  );
}

const mapStateToProps4 =  state => ({
  prediction: state.prediction,
})

export default connect(mapStateToProps4)(Login)