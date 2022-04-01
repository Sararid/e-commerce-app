import React, { useState } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineClose, AiOutlineShopping } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
    const [hidden, setHidden] = useState('hidden')
    const handleNavBar = () => {
        if (hidden) {
            setHidden('')
        } else {
            setHidden('hidden')
        }
    }

    //mirar tmabien si pongo el div en un nuevo componente y que se cierre cuando no lo utilizo 
    return (
        <>
            <header className='header'>
                <h2>Shop Now</h2>

                <nav className='header__nav'>
                    <GiHamburgerMenu className="header__nav--icon" onClick={handleNavBar} />
                    <NavLink to="/" className="header__nav--icon" ><AiOutlineHome /></NavLink>
                    <NavLink to="/Shop" className="header__nav--icon" ><AiOutlineShopping /></NavLink>
                    <NavLink to="/Cart" className="header__nav--icon" ><AiOutlineShoppingCart /></NavLink>



                </nav>
                <div className={`navContainer ${hidden}`}>
                    <div className='navContainer__sections'>   <NavLink to="/">Home</NavLink>
                        <NavLink to="/Shop">Shop</NavLink>
                        <NavLink to="/Collection">Collection</NavLink>
                        <NavLink to="/Cart">Cart</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                        <NavLink to="/Blog">Blog</NavLink>
                    </div> <div className='navContainer__closeIcon'> <AiOutlineClose onClick={() => setHidden('hidden')} />
                    </div>    </div>
            </header>
        </>)
}
