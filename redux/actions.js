import store from '../redux/store'
import { useDispatch } from 'react-redux'

// export const dispatch = useDispatch()

// action types
export const ADD_PREDICTION = 'ADD_PREDICTION'
export const DELETE_PREDICTION = 'DELETE_PREDICTION'

// action creators
export let addPrediction = (prediction_value, deadline_value, probability_value, reasoning_value, now) =>
  ({
    type: ADD_PREDICTION,
    payload: [{
      key: now,
      prediction: prediction_value,
      created_date: now,
      prob: probability_value, 
      deadline: deadline_value,
      reasoning: reasoning_value,
    }]
  })

export let deletePrediction = () =>
  store.dispatch({
    type: DELETE_PREDICTION,
    payload: {
      key: '1',
    }
  })
