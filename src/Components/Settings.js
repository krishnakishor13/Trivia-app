import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FetchButton from './FetchButton'


function Settings() {
  const [setOptions] = useState(null)
  const loading = useSelector((state) => state.options.loading)
  const dispatch = useDispatch()
  useEffect(() => { 
  }, [setOptions, dispatch])
  if (!loading) {
    return (
      <div>
        <h1>Welcome to the Trivia Challenge</h1>
        <h2>You will be presented with 10 True or false questions</h2>
        <div>
          <h2>Can you score 100 %</h2>
        </div>

        <FetchButton text="Begin!" />
      </div>
    )
  }
  return <p>LOADING...</p>
}
export default Settings
