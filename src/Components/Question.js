import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function Question() {
  const [questions, setQuestions] = useState([])
  const [options, setOptions] = useState([])
  const [disableBtn, setDisableBtn] = useState(false)

  const score = useSelector((state) => state.score)
  const encodedQuestions = useSelector((state) => state.questions)


  useEffect(() => {
    const decodedQuestions = encodedQuestions.map(q => {
      return {
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(a => decodeHTML(a))
      }
    })
    setQuestions(decodedQuestions)
  }, [encodedQuestions])
  const questionIndex = useSelector((state) => state.index)


  const dispatch = useDispatch()

  const question = questions[questionIndex]
  const answer = question && question.correct_answer

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  useEffect(() => {
    if (!question) {
      return;
    }
    let answers = [...question.incorrect_answers]
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)

    setOptions(answers)
  }, [question])

  const handleListItemClick = (event) => {
    setDisableBtn(true);
    questions[questionIndex].user_answer = event.target.textContent;
    let newScore = score;
    if (event.target.textContent === answer) {
      questions[questionIndex].is_correct = true;
      newScore = score + 1
    }
    dispatch({
      type: 'SET_SCORE',
      score: newScore,
      questions
    })

    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,

        });
        setDisableBtn(false);
      }, 250)
    }
  }

  if (!question) {
    return <div>Loading</div>
  }

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      {/* indexchange */}
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => (
          <button key={i} onClick={handleListItemClick} disabled={disableBtn} /* className={getClass(option)} */>
            {option}
          </button>
        ))}
      </ul>
      {/* <Decoded handleListItemClick={x}/> */}
    </div>
  )
}
export default Question
