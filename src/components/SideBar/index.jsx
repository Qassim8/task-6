import React from 'react'
import { NavLink } from 'react-router'

const SideBar = () => {
  return (
    <ul className='side bg-gray-900 flex flex-col gap-1.5 px-3 pt-4 text-white'>
        <li>
            <NavLink className="block py-2 font-bold px-10 bg-gray-800 rounded-lg" to={'/food'} end>Pizza</NavLink>
        </li>
        <li>
            <NavLink className="block py-2 font-bold px-10 bg-gray-800 rounded-lg" to={'burger'}>Burger</NavLink>
        </li>
        <li>
            <NavLink className="block py-2 font-bold px-10 bg-gray-800 rounded-lg" to={'salad'}>Salad</NavLink>
        </li>
    </ul>
  )
}

export default SideBar