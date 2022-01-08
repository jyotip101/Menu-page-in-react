import React, { useState } from 'react'
import Navbar from './Navbar'
import MenuData from './MenuData'
import MenuList from './MenuList'

const category = ['All', ...new Set(MenuData.map((item) => item.category))]

const Menu = () => {
  const [categories, setCatergories] = useState([category])
  const [data, setData] = useState(MenuData)

  const selectCategory = (categor) => {
    if (categor === 'All') {
      setData(MenuData)
      return
    }
    const selecteCate = MenuData.filter((item) => item.category === categor)
    setData(selecteCate)
  }

  return (
    <>
      <div className='container'>
        <div className='contant'>
          <h1 className='tilte'>Menu</h1>
          <Navbar categories={categories} selectCategory={selectCategory} />
          <MenuList data={data} />
        </div>
      </div>
    </>
  )
}

export default Menu
