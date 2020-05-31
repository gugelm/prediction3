import {UPDATE_PREDICTION} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const predictionReducer = (state = [], action) => {
  if (action.type === UPDATE_PREDICTION) return [...state, action.payload]
  return state
}

export default predictionReducer
