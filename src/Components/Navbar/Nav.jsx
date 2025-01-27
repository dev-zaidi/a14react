import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={style.navbar}>
    <ul className={style.navList}>
     <li className={style.navListItem}>
        <NavLink  className={style.navListItem} to="/">
            home
        </NavLink>
     </li>

     <li className={style.navListItem}>
        <NavLink  className={style.navListItem} to="/products">
            products
        </NavLink>
     </li>

     <li className={style.navListItem}>
        <NavLink  className={style.navListItem} to="/users">
            users
        </NavLink>
     </li>

     <li className={style.navListItem}>
        <NavLink className={style.navListItem} to="/github">
            github
        </NavLink>
     </li>
    </ul>
    </div>
  )
}

export default Nav