import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { updatePrediction } from './actions'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Happened: 
// 0 = Waiting, 1 = Happened, 2 = Didn't Happen

let predictionDataUpdate = []

let predictionData = [
  {
  "key":"1",
  "prediction":"Instagram has peaked.",
  "created_date":"5/1/2019",
  "prob":.9,
  "deadline":"5/1/2022",
  "reasoning": "My friends have stopped using it. People are tired of sees doggos and vacation and perfectly curated shots. Young kids are purposefully making their pics look like shit to be more authentic.",
  "happened": 1
  }, 
  {
  "key":"2",
  "prediction":"Trump will win the 2020 election.",
  "created_date":"10/8/2019",
  "prob": .8,
  "deadline":"11/3/2020",
  "reasoning": "From a trump’s supporters perspective, he’s done a good job. The economy is strong, he’s avoid conflict (e.g. Iran). Dems sense weakness i  their candidates and are pushing impeachment 1 year from the election. Kelly says 50% on 11/15/2019z",
  "happened": 2
  }]

function predictionStore(state=predictionData, action) {
	switch(action.type) {
		case "ADD_PREDICTION":
			return predictionData = [...predictionData, ...action.payload]
		case "DELETE_PREDICTION":
      return predictionData = predictionData.filter(a => a.prediction !== action.payload.prediction)
    case "UPDATE_PREDICTION":
      // this is probably a super weird way of doing it but it works... ¯\_(ツ)_/¯
      // create a new array with just the stuff we're looking to update      
      let predictionDataNew = predictionData.filter(b => b.key == action.payload.key)
      console.log(predictionDataNew)
      // then update with the new stuff
      predictionDataNew = [{...predictionDataNew, ...action.payload}]
      console.log(predictionDataNew)
      // then delete the original entry
      predictionData = predictionData.filter(b => b.key !== action.payload.key)
      // then add the new data back to the main array
      return predictionData = [...predictionData, ...predictionDataNew]
		default:
			return state
	}
}


export const reducer = combineReducers({
  prediction: predictionStore,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)