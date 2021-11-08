import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Question from './Question'
import Models from './Models'
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
    
  }

  

  // const settings = () => {
  //   dispatch({
  //     type: 'SET_SCORE',
  //     score: 0,
  //   })
  // }

  return (
    <div>
      <div><p>
      
      </p>
    
      
    </div>
      <h3 className="scorecard">Final Score: {score}/10</h3>
        <Decoded/>
      <button onClick={replay}>Play again</button>
     
     
    </div>
  )
}
export default FinalScreen
