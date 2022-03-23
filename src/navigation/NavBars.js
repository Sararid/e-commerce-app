import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    PONER AQUI UNA BURGER, y poner active style al navlink
                </p>
            </main>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Shop">Shop</NavLink>
                <NavLink to="/Collection">Collection</NavLink>
                <NavLink to="/Blog">Blog</NavLink>

                <NavLink to="/Contact">Contact</NavLink>


            </nav>
        </>)
}
