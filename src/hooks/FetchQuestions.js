

// This is the fetch hook that will be used to get the questions from the API
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


// Redux Actions
import * as Action from '../redux/question_reducer'
import { getServerData } from '../helper/helper.js';

export const useFetchQuestion =()=>{
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({isLoading : false,apiData : [], serverError: null});

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading : true}));

        // Async function to fetch data from the API
        (async ()=>{
            try{
                
                const data = await getServerData('http://localhost:5000/api/questions');
                const [{ questions, answers }] = data;
                console.log({ questions, answers })

                if(questions.length > 0){
                setGetData(prev => ({...prev, isLoading:false}));
                setGetData(prev => ({...prev, apiData : questions}));

                // Dispatch an Action to the store
                    dispatch(Action.startExamAction({question: questions, answers}))
                }
                else{
                    throw new Error('No data found');
                }
            }catch(error){
                setGetData(prev => ({...prev, isLoading :false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}
// Move next dispatch action
export const MoveNextQuestion =()=> async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction());
    }catch(error){
        console.log(error);
    }
}
// Move prev dispatch action
export const MovePrevQuestion =()=> async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction());
    }catch(error){
        console.log(error);
    }
}