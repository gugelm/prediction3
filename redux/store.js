import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import {updatePrediction} from './actions'
import predictionReducer from './reducer'


const predictionData = [
  {
  "key":"1",
  "prediction":"Instagram has peaked.",
  "created_date":"5/1/2019",
  "prob":"90%",
  "deadline":"5/1/2022",
  "reasoning": "My friends have stopped using it. People are tired of sees doggos and vacation and perfectly curated shots. Young kids are purposefully making their pics look like shit to be more authentic.",
  "happened": "Pending"
  }, 
  {
  "key":"2",
  "prediction":"Trump will win the 2020 election.",
  "created_date":"10/8/2019",
  "prob":"80%",
  "deadline":"11/3/2020",
  "reasoning": "From a trump’s supporters perspective, he’s done a good job. The economy is strong, he’s avoid conflict (e.g. Iran). Dems sense weakness i  their candidates and are pushing impeachment 1 year from the election. Kelly says 50% on 11/15/2019z",
  "happened": "Yes"
  }]


function predictionStore(state=predictionData, action) {
	switch(action.type) {
		case "ADD_PREDICTION":
			return [...predictionData, action.payload]
		case "DELETE_PREDICTION":
			return predictionData.filter(function (el) {
				return el.key == '1'})
		//add case happened and didn't happen
		default:
			return state
	}
}

export const reducer = combineReducers({
  prediction: predictionStore,
})

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/* const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, predictionReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
*/
