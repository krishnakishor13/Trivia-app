import React from 'react'

const Models = ({results,data}) => {
    return (
        <div>
            <session className="finalpage">
                <ul>
                    {results && results.map((result,category) => (
                        <li key={category}>
                            <p>{result.question}</p>
                            <p>{result.correct_answer}</p>

                        </li>
                    ))}
                </ul>

            </session>
        </div>
    )
}

export default Models
