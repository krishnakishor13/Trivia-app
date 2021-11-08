import React from 'react'
import { useSelector } from 'react-redux'

  const Decoded = () => {
    
    const results = useSelector((state) => state.questions) 
      
    return (
        <div className="resultpage">
            <div><ul>
        {results.map((result,i)=>(
          <li key = {i} >
           <div> {<p>Question</p>} {result.question} </div>

          <div>  {<p>Correct Answer</p>} {result.correct_answer} </div>
          </li>



        ))}
      </ul></div>
        </div>
    )
}

export default Decoded
