import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult'; 


// Redux Store imports
import { useDispatch, useSelector } from 'react-redux'
import result from './result';
import { Navigate } from 'react-router-dom';

export default function Quiz() {

  const [check, setChecked ]=useState(undefined);
  const result = useSelector(state => state.result.result);
  const {queue,trace} = useSelector(state => state.questions);
  const dispatch  = useDispatch();

    // useEffect(() => {
    //     console.log(result)
    //     })

/**  Next button Event handler */

    function onNext(){
        // console.log('On next click')
// Update the trace value by one 
      if(trace<queue.length ){
        dispatch(MoveNextQuestion());
      if(result.length <=trace){
        dispatch(PushAnswer(check))
      }
    } 
    setChecked(undefined);
    }


// Prev button Event handler
  function onPrev(){
    console.log('On prev click')
        if(trace>0){
          dispatch(MovePrevQuestion())
  }
}

  function onChecked(check){
    console.log(check);
    setChecked(check);
  }

  // Finish the exam after the last question

  if(result.length && result.length >=queue.length){
    return <Navigate to={'/result'} replace= {true}></Navigate>
  }



  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <Questions onChecked = {onChecked}></Questions>
      <div className='grid'>
      {trace>0 ? <button className='btn prev' onClick={onPrev}>Prev</button> :<div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
        
      </div>
    </div>
  )
}
