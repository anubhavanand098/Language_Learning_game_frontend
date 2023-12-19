import React, { useEffect } from 'react'
import '../components/styles/result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import resetAllAction from '../redux/question_reducer';
import resetResultAction from '../redux/result_reducer';
import { attempts_Number, earnedPoints, flagResult } from '../helper/helper';
import { usePublishResult } from '../hooks/setResult';

export default function Result() {

  const dispatch = useDispatch();
  const {questions : {queue, answers}, result : {result, userId}}= useSelector(state => state);  

//  useEffect(() => {
//    console.log(flag)
//   })
  
    const totalPoints = queue.length * 10;
    const attempt= attempts_Number(result);
    const earnedPoint= earnedPoints(result, answers, 10);
    const flag = flagResult(totalPoints, earnedPoint);
    
    //  console.log({result, username: userId, attempt, points: earnedPoint, achived :  flag ? "Passed" : "Failed"})
// Store Result
  usePublishResult({
    result, 
    username : userId,
    attempts: attempt,
    points : earnedPoint,
    achived : flag ? "Passed" : "Failed" });

  function onRestart(){
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className='container'>
    <h1 className='title text-light'> Quiz Application</h1>
    
    <div className='result flex-center'>
    <div className='flex'>
      <span>Username</span>
      <span className='bold'>{userId || ""}</span>
   </div>

    <div className='flex'>
      <span>Total Quiz points</span>
      <span className='bold'>{totalPoints || 0}</span>
    </div>
    <div className='flex'>
      <span>Total Questions :</span>
      <span className='bold'>{queue.length || 0}</span>
    </div>

    <div className='flex'>
      <span>Total Attempts: </span>
      <span className='bold'>{attempt || 0}</span>
    </div>

      <div className='flex'>
      <span>Total Earned points: </span>
      <span className='bold'>{earnedPoint || 0}</span>
    </div>
   

    <div className='flex'>
      <span>Quiz Result : </span>
      <span style={{color : `${flag? "#2aff95" : "#ff2a66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
    </div>

    </div>
    <div className='start'>
      <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
    </div>
    <div className="container">
    {/* result Table */}
      <ResultTable></ResultTable>
    </div>
    </div>
    )
}
