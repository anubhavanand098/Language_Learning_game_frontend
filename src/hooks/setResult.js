import { postServerData } from '../helper/helper.js'
import * as Action from '../redux/result_reducer'
// const dotenv = require('dotenv');

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    }catch (error) {
        console.log(error)
    }
}

// Insert user Data

export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
  
    (async () => {
      try {
        
        if (result.length === 0 || !username) {
          throw new Error("Couldn't get the results");
        }
  
        
        await postServerData('http://localhost:5000/api/result', resultData, data =>data);
  
        // console.log('Result posted successfully');
      } catch (error) {
        console.error(error);
      }
    })();
  };