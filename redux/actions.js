import store from '../redux/store'
import { useDispatch } from 'react-redux'

// export const dispatch = useDispatch()

// action types
export const ADD_PREDICTION = 'ADD_PREDICTION'
export const DELETE_PREDICTION = 'DELETE_PREDICTION'
export const UPDATE_PREDICTION = 'UPDATE_PREDICTION'

// action creators
export let addPrediction = (prediction_value, deadline_value, probability_value, reasoning_value, now) =>
  ({
    type: ADD_PREDICTION,
    payload: [{
      key: `$now`,
      prediction: prediction_value,
      created_date: now,
      prob: probability_value, 
      deadline: deadline_value,
      reasoning: reasoning_value,
    }]
  })

export let deletePrediction = (predictionEdit) =>
 ({
    type: DELETE_PREDICTION,
    payload: {
      prediction: predictionEdit,
    }
  })

export let updatePrediction = (predictionEdit, deadlineEdit, probabilityEdit, reasoningEdit, now, key) =>
  ({
    type: UPDATE_PREDICTION,
    payload: [{
      key: key,
      prediction: predictionEdit,
      created_date: now,
      prob: probabilityEdit, 
      deadline: deadlineEdit,
      reasoning: reasoningEdit,
    }]
  })