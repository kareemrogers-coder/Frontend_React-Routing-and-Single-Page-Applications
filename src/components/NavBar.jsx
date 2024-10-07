import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/nav.css'

const NavBar = () => {
  return (
    <div className='navbar-container' >
        
        <Link to="/">Home</Link>
   

        <nav>
            <NavLink to="/BrowseCharacters" activeClassName="active"> BrowseCharacters </NavLink>
            <NavLink to="/CharacterDetails" activeClassName="active" > CharacterDetails</NavLink>
            <NavLink to="/axios-users" activeClassName="active"> Users </NavLink>
            <NavLink to="/Comics" activeClassName="active" > Comics </NavLink>
        </nav>
      
    </div>
  )
}

export default NavBar