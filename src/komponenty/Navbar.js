import React, { Component } from 'react'
import { menuitems } from "./menuitems"
import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false }



    render() {
        return(
            <nav className='NavbarItems'>
                <p>Logo</p>
                <ul className='nav-menu'>
                    {menuitems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <a href='#' className='button-nav'>KONTAKT</a>
            </nav>
        )
    }
}

export default Navbar