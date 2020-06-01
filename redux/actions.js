import store from '../redux/store'

// action types
export const ADD_PREDICTION = 'ADD_PREDICTION'
export const DELETE_PREDICTION = 'DELETE_PREDICTION'

// action creators
export let addPrediction = (prediction_value) =>
  store.dispatch({
    type: ADD_PREDICTION,
    payload: {
      key: 'z',
      prediction: 'ok' + {prediction_value},
      created_date: 'z',
      prob: '4', 
      deadline: '5',
      reasoning: '6',
    }
  })

export let deletePrediction = () =>
  store.dispatch({
    type: DELETE_PREDICTION,
    payload: {
      key: '1',
    }
  })