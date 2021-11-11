const initState = {
    options: {
      loading: false,
    },
    questions: [],
    index: 0,
    score: 0,
  }
  const Reducer = (state = initState, action) => {
    switch (action.type) {
      case 'CHANGE_LOADING':
        return {
          ...state,
          options: {
            ...state.options,
            loading: action.loading,
          },
        }
      case 'SET_QUESTIONS':
        return {
          ...state,
          questions: action.questions.map(q => {
            return {
              ...q,
              is_correct: false,
              user_answer: ""
            }
          }),
        }
      case 'SET_INDEX':
        return {
          ...state,
          index: action.index,
        }
      case 'SET_SCORE':
        return {
          ...state,
          score: action.score,
          questions: action.questions,
        }
      default:
        return state
    }
  }
  export default Reducer
  