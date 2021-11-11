import React from 'react'
import { useSelector } from 'react-redux'

const Decoded = () => {

  const results = useSelector((state) => state.questions)
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div className="resultpage">
      <div><ul>
        {results.map((result, i) => (
          <li key={i} >
            <div> {<p>Question</p>} {renderHTML(result.question)} </div>
            {result.is_correct ?
              <div>  {<p>Your Answer</p>} {result.correct_answer} </div>
              : <>
                <div>  {<p>Your Answer</p>} {result.user_answer} </div>
                <div>  {<p>Correct Answer</p>} {result.correct_answer} </div>
              </>
            }
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Decoded
