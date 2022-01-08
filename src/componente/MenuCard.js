import React from 'react'

const MenuCard = (item) => {
  const { name, url } = item

  return (
    <>
      <article className='menu-card'>
        <img src={url} alt={name} />
        <div className='desc'>
          <h1 className='card-title'>
            <span>{name}</span>
            <span className='price'>$29.92</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere
            maiores consequatur quos rerum.
          </p>
        </div>
      </article>
    </>
  )
}

export default MenuCard
