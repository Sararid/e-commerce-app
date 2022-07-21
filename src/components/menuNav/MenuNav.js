import React, { useState } from 'react'
//icons
import { AiOutlineClose } from 'react-icons/ai';

export default function MenuNav({ width }) {
    const [widthButton, setWidthButton] = useState('0vw')
    const handleCloseButton = (ev) => {
        ev.preventDefault();
        console.log('hola')
        setWidthButton('0vw')
    }
    return (
        <div style={{
            position: 'absolute',
            top: '0px',
            height: '100vh',
            backgroundColor: 'pink',
            width: widthButton || width,

            right: '0'
        }
        }>
            <ul style={{ display: 'flex', flexDirection: 'column', margin: '50px', height: '200px' }} ><li>Home</li>
                <li>Shop</li>
                <li>About us</li>
                <li>Contact</li></ul>
            <div style={{ height: '20px' }} onClick={handleCloseButton}> <AiOutlineClose height='0vh' /> </div>

        </div>
    )
}
