import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {

 
  return (
    <Nav>
        <div className="menuIcon">
            <div className="navbar-list">
                <li>
                    <NavLink className='navbar-link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/About'>About</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link'  to='/Services'>Services</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/Contact'>Contact</NavLink>
                </li>
                
            </div>
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
.navbar-list{
    display:flex;
    gap:4.8rem;
    
     li{
        list-style:none; 

        .navbar-link{
            &:link,
            &:visited{
                display:inline-block;
                text-decoration:none;
                font-size:1.8rem;
                text-transform:uppercase;
                color:${({theme})=>theme.colors.black};
                transition:color 0.3s linear;
            }
          
            &:hover,
            &:active{
                color:${({theme})=> theme.colors.helper};
          }
        }
    }
}

`;
export default Navbar
