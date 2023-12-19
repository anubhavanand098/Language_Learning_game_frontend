import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../components/styles/main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

export default function Main() {
const inputRef= useRef(null);

  const dispatch = useDispatch();

  function startQuiz(){
    if( inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value))
    }
  }

  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>
    <ol>
        <li>You will be asked 10 Questions one after the another</li>
        <li>Each Question will have 4 options. You can choose only one option</li>
        <li>Each Question will have 10 points</li>
        <li>You can review and change  answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
    </ol>

    <form id='form'>
    <input ref= {inputRef} className='userid' type='text' placeholder='Username*' required/>
    </form>

    <div className='start'>
    <Link className='btn btn-primary' to='/quiz' onClick={startQuiz}>Start Quiz</Link> 
    </div>
    </div>
  )
}
