import React from 'react'
import MenuCard from './MenuCard'

const MenuList = ({ data }) => {
  return (
    <>
      <div className='menu-contant'>
        <div className='menu-center'>
          {data.map((item) => {
            return <MenuCard key={item.id} {...item} />
          })}
        </div>
      </div>
    </>
  )
}

export default MenuList
