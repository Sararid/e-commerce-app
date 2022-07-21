import React, { useState } from 'react'
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import MenuNav from '../menuNav/MenuNav';
export default function Header() {
    //  const [widthButton, setWidthButton] = useState('100vw')
    const { sideBar, setSideBar } = useState('0vw')
    // const { itemCount } = useContext(CartContext);
    // console.log(itemCount);
    const handlePress = (ev) => {
        ev.preventDefault();
        console.log('hello world')

        setSideBar('100vw')

    }
    return (
        <header className="header">
            <div className="header__container">
                <div >
                    <div onClick={handlePress} >
                        <FiMenu className="header__icon" />

                    </div>
                    <MenuNav width={sideBar} />
                </div>

                <>RANDA</>
                <div className="logo">
                    {/* <Link to="/" className="header__nav--logo">
                        RANDA
                    </Link> */}
                </div>
                <BsCart2 className="header__icon" />

                {/*  <Link to="/cart" className="header__nav--link">
                    <BsCart2 className="header__icon" />
                    {/* {itemCount > 0 ? (
                        <span className="header__icon--count">{itemCount}</span>
                    ) : null} 
                </Link>*/}
            </div>
        </header >
    );
}
