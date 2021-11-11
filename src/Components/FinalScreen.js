import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Decoded from './Decoded'


function FinalScreen(props,results) {
  const score = useSelector((state) => state.score)
  const dispatch = useDispatch()
  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })
    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
    dispatch({
      type: 'SET_SCORE',
      score: 0,
      questions: {}
    })
  }
  return (
    <div>
      <h3 className="scorecard">Final Score: {score}/10</h3>
        <Decoded/>
      <button onClick={replay}>Play again</button>
    </div>
  )
}
export default FinalScreen
