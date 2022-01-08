import React from 'react'

const Navbar = ({ categories, selectCategory }) => {
  return (
    <>
      <header className='navbar'>
        <ul className='links'>
          {categories[0].map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => selectCategory(item)}
                className='link'
              >
                {item}
              </button>
            )
          })}
        </ul>
      </header>
    </>
  )
}

export default Navbar
