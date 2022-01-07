import React, { useState } from 'react'
import Navbar from './Navbar'
import MenuData from './MenuData'

const category = ['All', ...new Set(MenuData.map((item) => item.category))]

const Menu = () => {
  const [categories, setCatergories] = useState(category)

  return (
    <>
      <div className='container'>
        <div className='contant'>
          <h1 className='tilte'>Menu</h1>
          <Navbar {...categories} />
        </div>
      </div>
    </>
  )
}

export default Menu
