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
  "prediction":"COVID19 cases won't exceed 3M in the US.",
  "created_date":"2/1/2019",
  "prob":.9,
  "deadlineMon":"Apr",
  "deadlineYear": "2020",
  "reasoning": "My Excel model predicts at least 5,000 - 10,000 cases.",
  "happened": 0
  }, 
  {
  "key":"2",
  "prediction":"John Doe will get engaged.",
  "created_date":"10/8/2019",
  "prob": .7,
  "deadlineMon":"Nov",
  "deadlineYear": "2020",
  "reasoning": "Because reasons.",
  "happened": 2
  },
  {
  "key":"3",
  "prediction":"Toys R Us will go out of business.",
  "created_date":"10/8/2015",
  "prob": .7,
  "deadlineMon":"Nov",
  "deadlineYear": "2016",
  "reasoning": "Because reasons.",
  "happened": 1
  }
  ]

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