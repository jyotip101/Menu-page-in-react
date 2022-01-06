import React, { useState } from 'react'
import QuesAndAns from './QuesAndAns'
import Data from './Data'

const Accordion = () => {
  const [data, setData] = useState(Data)

  return (
    <>
      <section className='container'>
        <h1 className='title'>
          Questions And Answers About <span>REST API</span>
        </h1>
        <article>
          {data.map((qa) => {
            return <QuesAndAns key={qa.id} {...qa} />
          })}
        </article>
      </section>
    </>
  )
}

export default Accordion
