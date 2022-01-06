import React, { useState } from 'react'

const QuesAndAns = ({ question, answer }) => {
  const [ans, setAns] = useState(false)

  return (
    <div className='items'>
      <div className='item'>
        <p>{question} </p>
        <button onClick={() => setAns(!ans)} className='btn'>
          <i className='material-icons'>{ans ? 'remove' : 'add'}</i>
        </button>
      </div>
      <p className='answer'>{ans && answer}</p>
    </div>
  )
}

export default QuesAndAns
