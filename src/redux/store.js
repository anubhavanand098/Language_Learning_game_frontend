import {combineReducers, configureStore} from '@reduxjs/toolkit';


// Call Reducer
import  questionReducer  from './question_reducer';  // Import the reducer
import resultReducer  from './result_reducer';  // Import the reducer
const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})
 
// Create Store

export default configureStore({reducer : rootReducer});