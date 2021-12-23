import React from 'react'
import "../assets/CSS/Header.css"

function Header() {
    const MenuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'nav-links'
        },
        {
            title: 'About Us',
            url: '#',
            cName: 'nav-links'
        },
        {
            title: 'Login',
            url: '/login',
            cName: 'nav-links'
        },
        {
            title: 'Sign Up',
            url: '/register',
            cName: 'nav-links'
        }
    ]
    return (
        <React.Fragment>
            <nav className='headerItems'>
                <h1 className='header-logo'>PORTFOLIO</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return <li key={index}><a className={item.cName} href={item.url} >{item.title}</a></li>
                    })}
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Header
