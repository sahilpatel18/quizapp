 import userScoreReducer from './userScoreReducer'
 import {combineReducers} from 'redux'

 const allReducers = combineReducers({
     userScore: userScoreReducer
 })

 export default allReducers