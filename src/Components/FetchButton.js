import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

  function FetchButton(props) {
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  const setLoading = (value) => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value,
    })
  }

  const setQuestions = (value) => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value,
    })
  }
  const handleQuery = async () => {
      const apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
    setLoading(true)

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.results)
        setLoading(false)
      })

    if (questionIndex > 0) {
      dispatch({
        type: 'SET_INDEX',
        index: 0,
      })

      dispatch({
        type: 'SET_SCORE',
        score: 0,
      })
    }
  }
  return (
  <div>
  <button onClick={handleQuery}>{props.text}</button>
  </div>);
}
export default FetchButton
